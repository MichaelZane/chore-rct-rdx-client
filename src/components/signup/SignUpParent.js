import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Avatar from "@mui/materialAvatar";
import Button from "@mui/materialButton";
import CssBaseline from "@mui/materialCssBaseline";
import TextField from "@mui/materialTextField";
import Grid from "@mui/materialGrid";
import Box from "@mui/materialBox";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@mui/materialTypography";
import { makeStyles } from "@mui/materialstyles";
import Container from "@mui/materialContainer";
import Copyright from "../Copyright";
import { register, clearError, selectError, selectLoading } from "../../slices/registerSlice";

// Styling Sign Up Form

const useStyles = makeStyles((theme) => ({
  h1: {
    color: "rgb(0, 94, 144)",
  },
  button: {
    backgroundColor: "hsl(201, 100%, 28.2%)",
    width: "300px",
    height: "60px",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "whiteSmoke",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  signin: {
    textAlign: "center",
  },
}));

//   Function Starts Here

export default function Register() {
  const [regstr, setRegstr] = useState({
    fname: "",
    lname: "",
    email: "",
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  const changeHandler = (e) => {
    setRegstr(currentState => {
    return {...currentState , [e.target.name]: e.target.value } 
    })
  };

  const submitHandler = (e) => {
    console.log("REGISTER OBJECT", regstr)
    e.preventDefault();
    dispatch(register(regstr));
    setRegstr({
      fname: "",
      lname: "",
      email: "",
      username: "",
      password: "",
    });
    navigate("/login");
  };
  const classes = useStyles();

  return (
    <div className="sign-up-wrapper">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          {error && <div>{error}</div>}
          <form className={classes.form} onSubmit={submitHandler} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="fname"
                  variant="outlined"
                  required
                  fullWidth
                  id="fname"
                  value={regstr.fname}
                  label="First Name"
                  autoFocus
                  onChange={changeHandler}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lname"
                  value={regstr.lname}
                  label="Last Name"
                  name="lname"
                  autoComplete="lname"
                  onChange={changeHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  value={regstr.email}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={changeHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  value={regstr.username}
                  label="Username"
                  name="username"
                  autoComplete="username"
                  onChange={changeHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={regstr.password}
                  autoComplete="current-password"
                  onChange={changeHandler}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={loading}
            >
              Sign Up
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
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
