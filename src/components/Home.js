import React, { useState } from "react";

import {Button } from "react-bootstrap"
/* MUI */
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
/* Redux */

import ChildList from "./ChildList";


/* Router */
import { Link } from "react-router-dom";
import AddChore from "./AddChore";


const useStyles = makeStyles((theme) => ({

	root: {
    
		color: "white"
	  },
	
	  Button: {
	
		backgroundColor: "transparent",
		label: {
		  color: "whitesmoke"
		}
		
	  }

}));

/* Home */

const Home = () => {

  const [modalShow, setModalShow] = useState(false);

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.reload("/");
  };

  return (
    <div className="sign-up-wrapper">
      <AddChore 
          show={modalShow}
          onHide={() => setModalShow(false)} />
      <div>
        <Typography>Welcome to your Track'em Dashboard </Typography>

        <Link to={"/signupChild"}>
          <Button  variant="outlined">
            Add Child
          </Button>
        </Link>
          <Button  variant="outlined" onClick={() => setModalShow(true)} >
            Add Chore
          </Button>
        

        <Button  onClick={logout} variant="outlined">
          LogOut
        </Button>

        <ChildList />
        
        {/* <TodoList /> */}
      </div>
    </div>
  );
};

export default Home;
