import React, { useState } from "react";
// Redux

// Router
import { Link, useNavigate } from "react-router-dom";
// Material UI
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { useDispatch } from "react-redux";
import { login } from "../../slices/loginSlice";
import { useTheme } from '@mui/material/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link to="/">TracIt</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

/* LogIn */

export default function Login() {
  const [logForm, setLogForm] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const theme = useTheme()

  const changeHandler = (e) => {
    setLogForm({ ...logForm, [e.target.name]: e.target.value });
  };
  const user = {username: logForm.username, password: logForm.password};

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(user))
    navigate("/home") 
  };

  return (
    <div className="sign-up-wrapper">
      <Container 
      maxWidth="sm" 
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "1000px",
        flexWrap: "wrap",
        zIndex: 1
      }}
      >
        <CssBaseline />
        <Card sx={{
          width: "500px",
          height: "550px",
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
          padding: "20px"
          }} 
          raised={true}>
          <div 
          sx={{
            marginTop: theme.spacing(4),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 20,
            margin: 20
          }}
          >
            {/* <Avatar 
              sx={{
                margin: theme.spacing(1),
                backgroundColor: theme.palette.secondary.main
              }}
            >
            </Avatar> */}
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form  
              onSubmit={submitHandler} 
              noValidate
              sx={{
                width: "100%",
                marginTop: theme.spacing(1),
                padding: 20
              }}
              >
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
                color="inherit"
                sx={{
                  color: "rgb(0, 94, 144)",
                  margin: theme.spacing(3, 0, 2)
                }}
              >
                Sign In
              </Button>

              <Button
                type="button"
                fullWidth
                variant="outlined"
                color="inherit"
                sx={{
                  color: "rgb(0, 94, 144)",
                  margin: theme.spacing(3, 0, 2)
                }}
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

