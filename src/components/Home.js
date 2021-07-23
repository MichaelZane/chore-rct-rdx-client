/* MUI */
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
/* Redux */
import ChildList from "./ChildList";
/* Router */
import { Link, useHistory } from "react-router-dom";

/* MUI styling */

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
  },

  headline: {

  },

  Button: {
    backgroundColor: "transparent",
    color: 'rgb(0, 94, 144)',
    
  },
}));

/* Home */

const Home = () => {

  const history = useHistory()
  
  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    history.push("/login");
  };
 
  const classes = useStyles();

  return (
    <div className="sign-up-wrapper">
      
      <Typography className={classes.headline} gutterBottom={true} variant={"h4"} >
        Welcome to your TrackIt Dashboard 
        </Typography>
      <div className="button-wrap">
        <Link to={"/signupChild"}>
          <Button className={classes.Button} variant="outlined"  >
            Add Child
          </Button>
        </Link>
        <Link to={"/addchore"}>
          <Button className={classes.Button} variant="outlined">Add Chore</Button>
        </Link>

        <Button className={classes.Button} onClick={logout} variant="outlined">
          LogOut
        </Button>
      </div>
      <ChildList />
    </div>
  );
};

export default Home