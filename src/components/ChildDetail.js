import { useEffect, useState } from "react";
/* Redux */
import { connect, useDispatch, useSelector } from "react-redux";
import updateChild from "../action/updateChild";
import child from "../action/child";

/* Router */
import { Link, useParams, useHistory } from "react-router-dom";
/* MUI */
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { AccountCircle } from "@material-ui/icons";
import Card from "@material-ui/core/Card";
import ChoreList from "./ChoreList";

/* styling starts here */

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    height: 750,
    margin: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "15px",
    background: "rgba(255,255,255,0.1)",
    position: "relative",
    overflow: "hidden",
    backdropFilter: "blur(1px)",
    color: "rgb(0, 94, 144)",
    boxShadow: "20px 20px 50px rgba(0,0,0,0.5)",
    borderTop: "1px solid rgba(255, 255, 255, 0.5)",
    borderLeft: "1px solid rgba(255, 255, 255, 0.5)",
  },
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 1200,
    flexWrap: "wrap",
    zIndex: 1,
    color: "rgb(0, 94, 144)",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "whiteSmoke",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    padding: 20,
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="/">
        Track `Em
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const ChildDetail = (props) => {
  const history = useHistory()
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const child = state.childReducer
  const [change, setChange] = useState({
    fstname: '',
    lstname: '',
    username: '',
    password: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  
  const toggleEdit = () => {
    setIsEditing(!isEditing)
  }

  const changeHandler = e => {

    setChange({...change, [e.target.name]: e.target.value });  
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateChild(child.id, change));
    history.push("/home");
    toggleEdit()
  };

  const cancel = (e) => {
    e.preventDefault()
    toggleEdit()
  }

  useEffect(() => {
    
    dispatch(child(props.match.params.id));
    
  }, []);

  useEffect(() => {
    setChange({
      fstname: child.fstname,
      lstname: child.lstname,
      username: child.username,
      password: child.password
    })
  }, [child])

  const classes = useStyles();
  
  return (
    
    <Container maxWidth="sm" className={classes.container}>
      <CssBaseline />
      {!isEditing ? (
      <Card raised={true} className={classes.root}> 
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AccountCircle />
          </Avatar>
          <Typography component="h1" variant="h5">
            Your Child's Details
          </Typography>
          {/* <form className={classes.form} onSubmit={submitHandler} noValidate> */}
            {/* <CardContent>
              {child.fstname}
            </CardContent>
            <CardContent>
              {child.lstname}
            </CardContent>
            <CardContent>
              {child.username}
            </CardContent>
            <CardContent>
              {child.password}
            </CardContent> */}

            <TextField
              type="text"
              variant="outlined"
              
              margin='normal'
              fullWidth
              id="lstname"
              // defaultValue={childValue.lstname}
              label="Last Name"
              name="lstname"
              autoComplete="lstname"
              onChange={changeHandler}
            />

            <TextField
              variant="outlined"
              
              fullWidth
              margin='normal'
              name="username"
              label="Username"
              type="text"
              id="username"
              // defaultValue={childValue.username}
              autoComplete="current-username"
              onChange={changeHandler}
            />

            <TextField
              variant="outlined"
              
              fullWidth
              margin='normal'
              name="password"
              label="Password"
              type="password"
              id="password"
              // defaultValue={childValue.password}
              autoComplete="current-password"
              onChange={changeHandler}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Update Child
            </Button>
            <Button
              type="button"
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => props.history.push("/home")}
            >
              Cancel
            </Button>
            <Card item xs={12}
              variant="outlined"
              >
                {<Link></Link>}
              </Card>
          {/* </form> */}
          <div>
            
            {/* <h2> {child.fstname}'s Chores</h2> */}
            <Card item xs={12} variant="outlined">
              {" "}
              {<ChoreList id={props.id} />}{" "}
            </Card>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </div>      
      </Card>
      ) : (
        <Card raised={true} className={classes.root}> 
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AccountCircle />
          </Avatar>
          <Typography component="h1" variant="h5">
            Your Child's Details
          </Typography>
          <form className={classes.form} onSubmit={submitHandler} noValidate>
            <TextField
              autoComplete="fstname"
              margin='normal'
              name="fstname"
              variant="outlined"
              
              fullWidth
              id="fstname"
              defaultValue={change.fstname || ''}
              label="First Name"
              autoFocus
              onChange={changeHandler}
            />

            <TextField
              type="text"
              variant="outlined"
              
              margin='normal'
              fullWidth
              id="lstname"
              defaultValue={change.lstname || ''}
              label="Last Name"
              name="lstname"
              autoComplete="lstname"
              onChange={changeHandler}
            />

            <TextField
              variant="outlined"
              
              fullWidth
              margin='normal'
              name="username"
              label="Username"
              type="text"
              id="username"
              defaultValue={change.username || ''}
              autoComplete="current-username"
              onChange={changeHandler}
            />

            <TextField
              variant="outlined"
              
              fullWidth
              margin='normal'
              name="password"
              label="Password"
              type="password"
              id="password"
              defaultValue={change.password || ''}
              autoComplete="current-password"
              onChange={changeHandler}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Update Child
            </Button>
            <Button
              type="button"
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => props.history.push("/home")}
            >
              Cancel
            </Button>
            <Card item xs={12}
              variant="outlined"
              >
                {<Link></Link>}
              </Card>
          </form>
          <div>
            
            <h2> {child.fstname}'s Chores</h2>
            <Card item xs={12} variant="outlined">
              {" "}
              {<ChoreList id={props.id} />}{" "}
            </Card>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </div>      
      </Card>
      )} 
    </Container>
  
  );
};

const mapStateToProps = (state) => {
  return {
    child: state.child,
  };
};

export default connect(mapStateToProps, { child, updateChild })(ChildDetail);
