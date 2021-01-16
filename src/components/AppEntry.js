import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Navigation from "./Navigation";

const AppEntry = () => {

  return (
    <div className="app-wrapper">
      
      {/* <Navigation /> */}
      <Grid item>
        <h1>Login/Sign Up</h1>
      </Grid>
      <br />
      <Grid 
        container spacing={4}
        direction="column"
        justify="center"
        alignItems="center"
        >
        <Grid item>
          <Link to="/SignUpChild" style={{ textDecoration: "none" }}>
            <Button  variant="contained" color="primary">
              <h2>I'm a child</h2>
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/SignUpParent" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary">
              <h2>I'm a parent</h2>
            </Button>
          </Link>
        </Grid>
      </Grid>
      <br />
     
    </div>
  );
};

export default AppEntry;
