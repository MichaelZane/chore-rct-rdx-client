import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Copyright from "../Copyright";
import {
  register,
  clearError,
  selectError,
  selectLoading,
} from "../../slices/registerSlice";

export default function Register() {
  const [regstr, setRegstr] = useState({
    fname: "",
    lname: "",
    email: "",
    username: "",
    password: "",
  });
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  const changeHandler = (e) => {
    setRegstr((currentState) => {
      return { ...currentState, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    console.log("REGISTER OBJECT", regstr);
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

  return (
    <div className="sign-up-wrapper">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div
          sx={{
            marginTop: theme.spacing(8),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "whiteSmoke",
          }}
        >
          {/* <Avatar 
            sx={{margin: theme.spacing(1),
              backgroundColor: theme.palette.secondary.main,}}>
          </Avatar> */}
          <Typography
            sx={{
              color: "rgb(0, 94, 144)",
              marginTop: "5%"
            }}
            component="h1"
            variant="h5"
          >
            Sign up
          </Typography>
          {error && <div>{error}</div>}
          <form
            sx={{ width: "100%", marginTop: "10%"}}
            onSubmit={submitHandler}
            noValidate
          >
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
              sx={{
                backgroundColor: "hsl(201, 100%, 28.2%)",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                margin: theme.spacing(3, 0, 2),
              }}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={loading}
            >
              Sign Up
            </Button>
            <Button
              sx={{
                backgroundColor: "hsl(201, 100%, 28.2%)",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                margin: theme.spacing(3, 0, 2),
              }}
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
            <Grid container justifyContent="center">
              <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
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
