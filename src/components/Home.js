/* MUI */
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
/* Redux */
import { connect, useSelector } from 'react-redux'
import ChildList from "./ChildList";
import getChildren from "../action/getChildren"

/* Router */
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";

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

const Home = props => {

  const history = useHistory()

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    history.push("/login");
  };
  // const getChilds = useSelector(state => state.child)
  // console.log(getChilds)
  // useEffect(() => {
  //   getChildren()
  // },[])
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
        <Link to={{
          pathname: "/addchore",
          state: { id: props.id }
          }}>
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