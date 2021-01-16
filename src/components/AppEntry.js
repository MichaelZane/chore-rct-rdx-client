import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Navigation from "./Navigation";

const AppEntry = () => {

  return (
    <div className="app-wrapper">
      <Navigation />
      <Grid item>
        <h2>Login/Sign Up</h2>
      </Grid>
      <br />
      <Grid container spacing={2}>
        <Grid item>
          <Link to="/SignUpChild" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary">
              I'm a child
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/SignUpParent" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary">
              I'm a parent
            </Button>
          </Link>
        </Grid>
      </Grid>
      <br />
    </div>
  );
};

export default AppEntry;
