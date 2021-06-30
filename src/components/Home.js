import React from "react";

/* MUI */
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
/* Redux */

import ChildList from "./ChildList";
import ChoreList from "./ChoreList";

/* Router */
import { Link } from "react-router-dom";


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
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.reload("/");
  };
  const classes = useStyles();
  return (
    <div className="sign-up-wrapper">
      <div>
        <Typography>Welcome to your Track'em Dashboard </Typography>

        <Link to={"/signupChild"}>
          <Button className={classes.Button} variant="outlined">
            Add Child
          </Button>
        </Link>

        <Link to={"/addchore"}>
          <Button className={classes.Button} variant="outlined">
            Add Chore
          </Button>
        </Link>

        <Button className={classes.Button} onClick={logout} variant="outlined">
          LogOut
        </Button>

        <ChildList />

        {/* <TodoList /> */}
      </div>
    </div>
  );
};

export default Home;
