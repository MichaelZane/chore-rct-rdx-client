import { Route, Routes } from "react-router-dom";
import SignUpParent from "./components/signup/SignUpParent";
import SignUpChild from "./components/signup/SignUpChild";
import AppEntry from "./components/AppEntry";
import Login from "./components/signin/Login";
import ChildLogin from "./components/signin/ChildLogin";
import AddChore from "./components/chore/AddChore";
import UpdateChore from "./components/chore/UpdateChore";
import ChildList from "./components/child/ChildList";
import Child from "./components/child/ChildCard";
import ChildDetail from "./components/child/ChildDetail";
import ChoreList from "./components/chore/ChoreList";
import Chore from "./components/chore/Chore";
import { PrivateRoute } from "./utils/PrivateRoute";
import Home from "./components/Home";
import UpdateChild from "./components/child/UpdateChild";

const App = () => {

  const token = localStorage.getItem("token")

  return (
    <Routes>
      <Route exact path="/" element={<AppEntry/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signUpParent" element={<SignUpParent/>}/>
      <Route path="/childLogin" element={<ChildLogin/>} />
      <Route element={<PrivateRoute token={token} />} >
        <Route path="/home" element={<Home token={token} />}/>
        <Route path="/childList" element={<ChildList token={token} />}/>
        <Route path="/signUpChild" element={<SignUpChild token={token} />}/>
        <Route path="/child/:id" element={<Child/>} />
        <Route path="/childdetail/:id" element={<ChildDetail token={token} />}/>
        <Route path="/updatechild/:id" element={<UpdateChild/>}/>
        <Route path="/chore/:id" element={<Chore token={token} />}/>
        <Route path="/choreList/:id" element={<ChoreList token={token} />}/>
        <Route path="/addchore" element={<AddChore token={token} />}/>
        <Route path="/updateChore" element={<UpdateChore token={token} />}/>
      </Route>
    </Routes>
  );
};

export default App;