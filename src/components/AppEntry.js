import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import logo from '../assets/tracItLogoWhite.png'
import SignUpParent from "./SignUpParent";
import Login from "./Login";

const useStyles = makeStyles(theme => ({
  root: {
    
    color: "white"
  },

  Button: {

    color: "rgb(0, 94, 144)",
    backgroundColor: "primary"
    
  }
  
}));

const AppEntry = () => {

  const classes = useStyles();

  return (
    <div className="app-wrapper">
      
      {/* <Navigation /> */}
      {/* <Grid item>
        <h1>Login/Sign Up</h1>
      </Grid> */}
      <br />
      <img className="logo" src={logo} alt="logo"/>
      <Grid 
        container spacing={4}
        direction="column"
        justify="center"
        alignItems="center"
        >
        <Grid item>
          <Link to="/SignUpChild" style={{ textDecoration: "none" }}>
            <Button className={classes.Button} variant="contained" >
              I'm a child 
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/SignUpParent" style={{ textDecoration: "none" }}>
            <Button className={classes.Button} variant="contained" color="transparent">
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