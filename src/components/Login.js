import React, { useState } from "react";
// Redux
import { connect, useDispatch } from "react-redux";
// Router
import { Link } from "react-router-dom";
import { Modal, Form, Button } from "react-bootstrap"
import login from "../action/login";


function Copyright() {
  return (
    <div variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link to="/">TracIt</Link> {new Date().getFullYear()}
      {"."}
    </div>
  );
}

const Login = props => {

  // const dispatch = useDispatch()

  const [login, setLogin] = useState({
    username: "",
    password: ""
  });

  const changeHandler = e => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  
  const submitHandler = (e) => { 
    e.preventDefault()
    props.login(login, props.history)
    // dispatch(getUserLogin(logForm, props.history))
    
  };

  return (
    <Modal
      animation="false"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Log In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitHandler} >
          <Form.Group controlId="formGroupName">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              onChange={changeHandler}
              value={login.username}
              
            />
          </Form.Group>
          <Form.Group controlId="formGroupName">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Password"
              onChange={changeHandler}
              value={login.password}
            />
          </Form.Group>
          <Button 
            type="submit"   
            variant="outlined" 
            color="primary"
            >
            Log In
          </Button>
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={() => props.history.push("/home")}
          >
            Cancel
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
      <Copyright />
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
    </Modal>
    // <div className="sign-up-wrapper">
    //   <Container component="main" maxWidth="xs">
    //       <CssBaseline />
    //       <div className={classes.paper}>
    //         <Avatar className={classes.avatar}>
    //           <LockOutlinedIcon />
    //         </Avatar>
    //         <Typography component="h1" variant="h5">
    //           Sign in
    //         </Typography>
    //         <form className={classes.form} onSubmit={submitHandler} noValidate>
    //           <TextField
    //             variant="outlined"
    //             onChange={changeHandler}
    //             margin="normal"
    //             value={logForm.username}
    //             required
    //             fullWidth
    //             id="username"
    //             label="Username"
    //             name="username"
    //             autoComplete="username"
    //             autoFocus
    //           />
    //           <TextField
    //             variant="outlined"
    //             onChange={changeHandler}
    //             margin="normal"
    //             required
    //             value={logForm.password}
    //             fullWidth
    //             name="password"
    //             label="Password"
    //             type="password"
    //             id="password"
    //             autoComplete="current-password"
    //           />
    //           <FormControlLabel
    //             control={<Checkbox value="remember" color="primary" />}
    //             label="Remember me"
    //           />
    //           <Button
    //             type="submit"
    //             fullWidth
    //             variant="contained"
    //             color="primary"
    //             className={classes.submit}
    //           >
    //             Sign In
    //           </Button>
    //           <Grid container>
    //             <Grid item xs>
    //               <Link to="/">Forgot password?</Link>
    //             </Grid>
    //             <Grid item>
    //               <Link to="/">{"Don't have an account? Sign Up"}</Link>
    //             </Grid>
    //           </Grid>
    //         </form>
    //       </div>
    //       <div style={{ display: localStorage.token ? "none" : "block" }}>
          
    //     </div>
    //     <div>
    //       <p>or</p>
    //     </div>
    //       <Box mt={8}>
    //         <Copyright />
    //       </Box>
    //   </Container>
    // </div>
  );
};

const mapStateToProps = state => {
  return {

    userData: state.userData,

  };
};

export default connect(mapStateToProps, {login})(Login);
