import React, { useState } from "react";

/* MUI */
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
/* Redux */

import ChildList from "./ChildList";

/* Router */
import { Link } from "react-router-dom";
import AddChore from "./AddChore";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
  },

  Button: {
    backgroundColor: "transparent",
    label: {
      color: "whitesmoke",
    },
  },
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
      
      <Typography gutterBottom={true} variant={"h4"} >
        Welcome to your Track'em Dashboard 
        </Typography>
      <div className="button-wrap">
        <Link to={"/signupChild"}>
          <Button className={classes.Button} variant="outlined">
            Add Child
          </Button>
        </Link>
        <Link to={"/addchore"}>
          <Button variant="outlined">Add Chore</Button>
        </Link>

        <Button className={classes.Button} onClick={logout} variant="outlined">
          LogOut
        </Button>
      </div>
      <ChildList />
    </div>
  );
};

export default Home;
