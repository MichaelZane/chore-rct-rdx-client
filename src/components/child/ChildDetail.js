import { useEffect, useState } from "react";
/* Redux */
import { useDispatch, useSelector } from "react-redux";


/* Router */
import { useNavigate, useParams } from "react-router-dom";
/* MUI */
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { fetchChildDetails, updateChild, selectChildDetails } from "../../slices/childSlice";
import { makeStyles } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { AccountCircle } from "@material-ui/icons";
import Copyright from "../Copyright";
import { CircularProgress } from "@mui/material";

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

const ChildDetail = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();

  const child = useSelector(selectChildDetails)

  const [form, setForm] = useState({})

  useEffect(() => {

    dispatch(fetchChildDetails(id))

  }, [])

  useEffect(() => {

    if(child) {
      setForm(child);
    }
  }, [child])

  const handleChanges = (e) => {
    setForm(currentState => {
      return {...currentState,
      [e.target.name]: e.target.value 
      }
    });
  };
  
  const submitHandler = (e) => {
    e.preventDefault();
    if(child)
    dispatch(updateChild({id, ...form}));
    setForm({})
    navigate("/home");
  };

  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.container}>
      <CssBaseline />
      {child ?
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
              margin="normal"
              name="fstname"
              variant="outlined"
              fullWidth
              id="fstname"
              value={form?.fstname}
              label="First Name"
              autoFocus
              onChange={handleChanges}
            />

            <TextField
              type="text"
              variant="outlined"
              margin="normal"
              fullWidth
              id="lstname"
              value={form?.lstname}
              label="Last Name"
              name="lstname"
              autoComplete="lstname"
              onChange={handleChanges}
            />

            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              name="username"
              label="Username"
              type="text"
              id="username"
              value={form?.username}
              autoComplete="current-username"
              onChange={handleChanges}
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
              onClick={() => navigate("/home")}
            >
              Cancel
            </Button>
          </form>
          <Box mt={5}>
            <Copyright />
          </Box>
        </div>
      </Card>
      : <CircularProgress />
    }
    </Container>
  );
};

export default ChildDetail;
