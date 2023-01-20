/* MUI */
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/material/styles";
/* Redux */
import ChildList from "../components/child/ChildList";
/* Router */
import { Link, useNavigate } from "react-router-dom";

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

  const navigate = useNavigate()
  
  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
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
        <Button className={classes.Button} onClick={logout} variant="outlined">
          LogOut
        </Button>
      </div>
      <ChildList />
    </div>
  );
};

export default Home