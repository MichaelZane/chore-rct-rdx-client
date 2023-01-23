import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import addChild from "../../slices/childSlice";
import { useTheme } from '@mui/material/styles';
import Copyright from "../Copyright";
import { useDispatch } from "react-redux";

export default function SignUpChild () {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const theme = useTheme()

  const [state, setState] = useState({
    parent_id: localStorage.getItem("userId"),
    fstname: "",
    lstname: "",
    username: "",
    password: ""
  });
  console.log(state)
  const changeHandler = (e) => {
    setState(currentState => {
      return {...currentState, [e.target.name]: e.target.value
      }
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!state) {
      throw new Error("state is undefined");
    }
    dispatch(addChild(state));
    setState({});
    navigate("/home");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div sx={{
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <Avatar 
          sx={{
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main
          }}
        >
          {/* <AccountCircle /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Add Your Child
        </Typography>
        <form
        sx={{
          width: "100%",
          marginTop: theme.spacing(3)
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
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={state.password}
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
            sx={{
              margin: theme.spacing(3, 0, 2)
            }}
          >
            Add Child
          </Button>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              margin: theme.spacing(3, 0, 2)
            }}
            onClick={() => navigate("/home")}
            >
            Cancel
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};