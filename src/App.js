import { Route, Switch } from "react-router-dom";
import SignUpParent from "./components/SignUpParent";
import SignUpChild from "./components/SignUpChild";
import AppEntry from "./components/AppEntry";
import Login from "./components/Login";
import childLogin from "./components/ChildLogin";
import AddChore from "./components/AddChore";
import UpdateChore from "./components/UpdateChore";
import ChildList from "./components/ChildList";
import Child from "./components/Child";
import ChildDetail from "./components/ChildDetail";
import ChoreList from "./components/ChoreList";
import Chore from "./components/Chore";
import { PrivateRoute } from "./utils/PrivateRoute";
import Home from "./components/Home";
import UpdateChild from "./components/UpdateChild";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={AppEntry} />
      <Route path="/login" component={Login} />
      <Route path="/signUpParent" component={SignUpParent} />
      <Route path="/childLogin" component={childLogin} />
      <PrivateRoute path="/home" component={Home} />
      <PrivateRoute path="/signUpChild" component={SignUpChild} />
      <PrivateRoute path="/updateChild/:id" component={UpdateChild} />
      <PrivateRoute path="/addchore" component={AddChore} />
      <PrivateRoute path="/updateChore" component={UpdateChore} />
      <PrivateRoute path="/childList" component={ChildList} />
      <PrivateRoute path="/chore/:id" component={Chore} />
      <PrivateRoute path="/choreList/:id" component={ChoreList} />
      <PrivateRoute path="/child/:id" component={Child} />
      <PrivateRoute path="/childdetail/:id">
        {" "}
        <ChildDetail />
      </PrivateRoute>
      <PrivateRoute path="/updatechild/:id">
        <UpdateChild />
      </PrivateRoute>
    </Switch>
  );
};

export default App;