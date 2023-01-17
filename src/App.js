import { Route, Routes } from "react-router-dom";
import SignUpParent from "./components/SignUpParent";
import SignUpChild from "./components/SignUpChild";
import AppEntry from "./components/AppEntry";
import Login from "./components/Login";
import ChildLogin from "./components/ChildLogin";
import AddChore from "./components/AddChore";
import UpdateChore from "./components/UpdateChore";
import ChildList from "./components/ChildList";
import Child from "./components/ChildCard";
import ChildDetail from "./components/ChildDetail";
import ChoreList from "./components/ChoreList";
import Chore from "./components/Chore";
import { PrivateRoute } from "./utils/PrivateRoute";
import Home from "./components/Home";
import UpdateChild from "./components/UpdateChild";

const App = () => {
  const token = localStorage.getItem('token');
  return (
    <Routes>
      <Route exact path="/" element={<AppEntry/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signUpParent" element={<SignUpParent/>} />
      <Route path="/childLogin" element={<ChildLogin/>} />
      <Route element={<PrivateRoute token={token} />} >
        <Route path="/home" element={<Home/>}/>
        <Route path="/childList" element={<ChildList/>}/>
        <Route path="/signUpChild" element={<SignUpChild/>} />        <Route path="/child/:id" element={<Child/>} />
        <Route path="/childdetail/:id" element={<ChildDetail />}/>
        <Route path="/updatechild/:id" element={<UpdateChild/>}/>
        <Route path="/chore/:id" element={<Chore/>} />
        <Route path="/choreList/:id" element={<ChoreList/>} />
        <Route path="/addchore" element={<AddChore/>} />
        <Route path="/updateChore" element={<UpdateChore/>} />       
      </Route>
    </Routes>
  );
};

export default App;