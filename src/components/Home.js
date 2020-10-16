import React, { useRef, useState } from 'react';

       /* MUI */
import { Button } from '@material-ui/core';
import { Popover } from '@material-ui/core';

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
      <h4>Welcome to your  Track'em Dashboard </h4>
      
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