import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import logo from "../assets/tracItLogoWhite.png";


    // color: "white",


const AppEntry = () => {

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
            <Button sx={{ backgroundColor: "transparent", color: "rgb(0, 94, 144)" }} variant="contained">
              I'm a child
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/signUpParent" style={{ textDecoration: "none" }}>
            <Button
              sx={{ backgroundColor: "transparent", color: "rgb(0, 94, 144)" }}
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
