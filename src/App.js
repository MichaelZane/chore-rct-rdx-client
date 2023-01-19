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
import { selectToken } from "./slices/loginSlice";
import { useSelector} from "react-redux";

const App = () => {
  const token = useSelector(selectToken)
  
  return (
    <Routes>
      <Route exact path="/" element={<AppEntry/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signUpParent" element={<SignUpParent/>}/>
      <Route path="/childLogin" element={<ChildLogin/>} />
      <Route element={<PrivateRoute token={token} />} >
        <Route path="/home" element={<Home token={token} />}/>
        <Route path="/childList" element={<ChildList/>}/>
        <Route path="/signUpChild" element={<SignUpChild token={token} />}/>
        <Route path="/child/:id" element={<Child/>} />
        <Route path="/childdetail/:id" element={<ChildDetail />}/>
        <Route path="/updatechild/:id" element={<UpdateChild/>}/>
        <Route path="/chore/:id" element={<Chore/>}/>
        <Route path="/choreList/:id" element={<ChoreList/>}/>
        <Route path="/addchore" element={<AddChore/>}/>
        <Route path="/updateChore" element={<UpdateChore/>}/>
      </Route>
    </Routes>
  );
};

export default App;