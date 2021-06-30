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
      <Route path='/login' component={Login} />
      <Route path='/signUpParent' component={SignUpParent} />
      <Route path='/childLogin' component={childLogin} />

      <PrivateRoute path='/home' component={Home} />
      <PrivateRoute path='/signUpChild' component={SignUpChild} />
      <PrivateRoute path='/updateChild/:id' component={UpdateChild} />
      <PrivateRoute path='/addchore' component={AddChore} />
      <PrivateRoute path='/updateChore' component={UpdateChore} />
      <PrivateRoute path='/childList' component={ChildList} />
      <PrivateRoute exact path='/childdetail/:id' component={ChildDetail} />
      <PrivateRoute exact path='/chore/:id'  component={Chore} />
      <PrivateRoute exact path='/choreList/:id' component={ChoreList} />
      {/* <PrivateRoute exact path='/choreList' component={ChoreList}/> */}
    </Switch>
  
  );
};

export default connect(state => state)(App);
