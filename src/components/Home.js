/* MUI */
import { Button, Typography } from "@mui/material";
/* Redux */
import ChildList from "../components/child/ChildList";
/* Router */
import { Link, useNavigate } from "react-router-dom";

/* MUI styling */


  // root: {
  //   color: "white",

/* Home */

const Home = () => {
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="sign-up-wrapper">
      <Typography gutterBottom={true} variant={"h4"}>
        Welcome to your TrackIt Dashboard
      </Typography>
      <div className="button-wrap">
        <Link to={"/signupChild"}>
          <Button
            sx={{ backgroundColor: "transparent", color: "rgb(0, 94, 144)" }}
            variant="outlined"
          >
            Add Child
          </Button>
        </Link>
        <Button
          sx={{ backgroundColor: "transparent", color: "rgb(0, 94, 144)" }}
          onClick={logout}
          variant="outlined"
        >
          LogOut
        </Button>
      </div>
      <ChildList />
    </div>
  );
};

export default Home;
