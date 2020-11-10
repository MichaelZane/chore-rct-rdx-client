import React from 'react';

       /* MUI */
import { Button, Typography } from '@material-ui/core';


       /* Redux */

import ChildList from './ChildList';
import ChoreList from './ChoreList';


       /* Router */
import { Link } from "react-router-dom"
import { ChoresList } from './ChoresList';

       /* Home */

const Home = () => {

  const logout = (e) => {
    e.preventDefault()
    localStorage.removeItem("token")
    window.location.reload("/")

  }

  return (
    <div>
      <Typography>Welcome to your Track'em Dashboard </Typography>
      
        <Link to={"/signupChild"}>
        <Button
          variant="outlined"
        >Add Child</Button>
        </Link>

        <Link to={"/addchore"}>
        <Button
          variant="outlined"
        >Add Chore</Button>
        </Link>

        <Button
        onClick={logout}
        variant="outlined"
        >LogOut</Button>
        
        <ChildList />
       
      {/* <TodoList /> */}

    </div>
  );
};


export default Home