import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUpParent from './components/SignUpParent';
import SignUpChild from './components/SignUpChild';
import AppEntry from './components/AppEntry';
import Login from './components/Login';
import childLogin from './components/ChildLogin';
import AddChore from './components/AddChore';
import UpdateChore from './components/UpdateChore';
import ChildList from './components/ChildList';
import ChildDetail from './components/ChildDetail';
import ChoreList from './components/ChoreList';
import Chore from './components/Chore';
import { PrivateRoute } from './utils/PrivateRoute';
import Home from './components/Home';
import UpdateChild from './components/UpdateChild';
import { connect } from 'react-redux';

const App = (props) => {

  

  return (
    
    <Switch>
      <Route exact path='/' component={AppEntry} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signUpParent' component={SignUpParent} />
      <Route exact path='/childLogin' component={childLogin} />

      <PrivateRoute exact path='/home' component={Home} />
      <PrivateRoute exact path='/signUpChild' component={SignUpChild} />
      <PrivateRoute exact path='/updateChild/:id' component={UpdateChild} />
      <PrivateRoute exact path='/addchore' component={AddChore} />
      <PrivateRoute exact path='/updateChore' component={UpdateChore} />
      <PrivateRoute exact path='/childList' component={ChildList} />
      <PrivateRoute exact path='/childdetail/:id' component={ChildDetail} />
      <PrivateRoute exact path='/chore/:id'  component={Chore} />
      <PrivateRoute exact path='/choreList/:id' component={ChoreList} />
      {/* <PrivateRoute exact path='/choreList' component={ChoreList}/> */}
    </Switch>
  
  );
};

export default connect(state => state)(App);
