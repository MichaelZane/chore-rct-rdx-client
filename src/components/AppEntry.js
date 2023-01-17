import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/tracItLogoWhite.png";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
  },

  Button: {
    color: "rgb(0, 94, 144)",
    backgroundColor: "primary",
  },
}));

const AppEntry = () => {
  const classes = useStyles();

  return (
    <div className="app-wrapper">
      <br />
      <img className="logo" src={logo} alt="logo" />
      <Grid
        container
        spacing={4}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Link to="/signUpChild" style={{ textDecoration: "none" }}>
            <Button className={classes.Button} variant="contained">
              I'm a child
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/signUpParent" style={{ textDecoration: "none" }}>
            <Button
              className={classes.Button}
              variant="contained"
              color="inherit"
            >
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
