import React, { useState } from "react";
// Redux

// Router
import { Link, useNavigate } from "react-router-dom";
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
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import { useDispatch } from "react-redux";
import { login } from "../../slices/loginSlice";

// Styling Starts Here

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link to="/">TracIt</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "500px",
      height: "750px",
      margin: "20px",
      borderRadius: "15px",
      backgroundColor: "rgba(255,255,255,0.1)",
      position: "relative",
      overflow: "hidden",
      backdropFilter: "blur(2px)",
      color: "rgb(0, 94, 144)",
      boxShadow: "20px 20px 50px rgba(0,0,0,0.5)",
      borderTop: "1px solid rgba(255, 255, 255, 0.5)",
      borderLeft: "1px solid rgba(255, 255, 255, 0.5)",
      label: "rgb(0, 94, 144)",
      padding: "20px",
    },
    container: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "1000px",
      flexWrap: "wrap",
      zIndex: 1,
    },
    paper: {
      marginTop: theme.spacing(4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: 20,
      margin: 20,
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
      padding: 20,
    },
    Button: {
      color: "rgb(0, 94, 144)",
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  })
);

/* LogIn */

export default function Login() {
  const [logForm, setLogForm] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch()//useThunkDispatch()
  const navigate = useNavigate()

  const changeHandler = (event) => {
    setLogForm({ ...logForm, [event.target.name]: event.target.value });
  };
  const user = {username: logForm.username, password: logForm.password};

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(user))
    navigate("/home")
    
  };

  const classes = useStyles();

  /* OATH GOOGLE */

  return (
    <div className="sign-up-wrapper">
      <Container maxWidth="sm" className={classes.container}>
        <CssBaseline />
        <Card className={classes.root} raised={true}>
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
                value={logForm.username}
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
                value={logForm.password}
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
                variant="outlined"
                className={classes.submit}
              >
                Sign In
              </Button>

              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => navigate("/")}
              >
                Cancel
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

          <Box mt={4}>
            <Copyright />
          </Box>
        </Card>
      </Container>
    </div>
  );
};

