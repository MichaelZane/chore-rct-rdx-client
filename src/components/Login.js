import React, { useState } from "react";
// Redux
import { connect } from "react-redux";
// Router
import { Link } from "react-router-dom";
// Material UI
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import login from "../action/login";
import { signUpGoogle } from "../action/login"
import GoogleLogin, { GoogleLogout } from "react-google-login"

// Styling Starts Here

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link to="/">HomeChoreTracker</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

/* LogIn */

const Login = props => {
  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value });

  };

  const submitHandler = (e) => {
    e.preventDefault()
    props.login(form)
    props.history.push("/home")
    setForm({ username: "", password: "" })
    
  };

  const classes = useStyles();

  /* OATH GOOGLE */

  const responseGoogle = res => {
    const { tokenId } = res
    localStorage.setItem("token", tokenId)
    localStorage.setItem("image", res.profileObj.imageUrl)
    props.signUpGoogle()
    props.history.push("/")
  }

  return (
    <Container component="main" maxWidth="xs">

        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={submitHandler} noValidate>
            <TextField
              variant="outlined"
              onChange={changeHandler}
              margin="normal"
              value={form.username}
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              variant="outlined"
              onChange={changeHandler}
              margin="normal"
              required
              value={form.password}
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/">Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link to="/">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <div style={{ display: localStorage.token ? "none" : "block" }}>
        <GoogleLogin
          className="google-btn"
          clientId={process.env.REACT_APP_CLIENT_ID}
          buttonText="Log In with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          />
      </div>
      <div>
        <p>or</p>
      </div>
        <Box mt={8}>
          <Copyright />
        </Box>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    userData: state.userData,
  };
};

export default connect(mapStateToProps, { login, signUpGoogle })(Login);
