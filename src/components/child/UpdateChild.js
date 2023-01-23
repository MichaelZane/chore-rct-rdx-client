import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";

// Styling Sign Up Form

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="/">
        HomeChoreTracker
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}



const UpdateChild = (props) => {
  const theme = useTheme();
  const { id } = useParams();
  const navigate = useNavigate()

  const [state, setState] = useState({
    parent_id: props.parentId,
    fstname: "",
    lstname: "",
    username: "",
    id: id,
  });

  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.updateChild(state);

    setState({
      fstname: "",
      lstname: "",
      username: "",
      password: "",
    });

    navigate("/home");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div
        sx={{
          marginTop: theme.spacing(8),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
          }}
        >
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Update a child
        </Typography>
        <form
          sx={{
            width: "100%", // Fix IE 11 issue.
            marginTop: theme.spacing(3),
          }}
          onSubmit={submitHandler}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fstname"
                name="fstname"
                variant="outlined"
                required
                fullWidth
                id="fstname"
                value={state.fstname}
                label="First Name"
                autoFocus
                onChange={changeHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                variant="outlined"
                required
                fullWidth
                id="lstname"
                value={state.lstname}
                label="Last Name"
                name="lstname"
                autoComplete="lstname"
                onChange={changeHandler}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="username"
                label="Username"
                type="text"
                id="username"
                value={state.username}
                autoComplete="current-username"
                onChange={changeHandler}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              margin: theme.spacing(3, 0, 2)
            }}
          >
            Update
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/childLogin">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default UpdateChild;
