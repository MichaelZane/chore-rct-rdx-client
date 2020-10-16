import React from 'react';

       /* MUI */
import { Button, Typography } from '@material-ui/core';


       /* Redux */
import TodoList from './TodoList';
import ChildList from './ChildList';
import ChoreList from './ChoreList';


       /* Router */
import { Link } from "react-router-dom"

       /* Home */

const Home = () => {

  return (
    <div>
      <Typography>Welcome to your Track'em Dashboard </Typography>
      
        <Link to={"/signupChild"}>
        <Button
          variant="outlined"
        >Add Child</Button>
        </Link>
      
        
        <ChildList />
      {/* <TodoList /> */}
      {/* <ChoreList /> */}
    </div>
  );
};


export default Home