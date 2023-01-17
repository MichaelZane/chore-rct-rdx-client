import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link, useNavigate } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { AccountCircle } from "@material-ui/icons";
import Card from "@material-ui/core/Card";

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

const ChildForm = ({
  handleSubmit,
  submitHandler,
  register,
  value,
  changeHandler,
}) => {
  const history = useNavigate();

  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.container}>
      <CssBaseline />
      <Card raised={true} className={classes.root}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AccountCircle />
          </Avatar>
          <Typography component="h1" variant="h5">
            Your Child's Details
          </Typography>
          <form
            className={classes.form}
            onSubmit={handleSubmit(submitHandler)}
            noValidate
          >
            <TextField
              ref={register}
              autoComplete="fstname"
              margin="normal"
              name="fstname"
              variant="outlined"
              fullWidth
              id="fstname"
              value={value}
              label="First Name"
              autoFocus
              onChange={changeHandler}
            />

            <TextField
              type="text"
              variant="outlined"
              ref={register}
              margin="normal"
              fullWidth
              id="lstname"
              value={value}
              label="Last Name"
              name="lstname"
              autoComplete="lstname"
              onChange={changeHandler}
            />

            <TextField
              variant="outlined"
              ref={register}
              fullWidth
              margin="normal"
              name="username"
              label="Username"
              type="text"
              id="username"
              value={value}
              autoComplete="current-username"
              onChange={changeHandler}
            />

            <TextField
              variant="outlined"
              ref={register}
              fullWidth
              margin="normal"
              name="password"
              label="Password"
              type="password"
              id="password"
              value={value}
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
              onClick={() => history.push("/home")}
            >
              Cancel
            </Button>
            <Card item xs={12} variant="outlined">
              {<Link></Link>}
            </Card>
          </form>
          <CardContent>
            {/* <h2> {.fstname}'s Chores</h2> */}
            <Card item xs={12} variant="outlined">
              {/* {<ChoreList />} */}
            </Card>
          </CardContent>
          <Box mt={5}>
            <Copyright />
          </Box>
        </div>
      </Card>

      {/* <Button onClick={() => toggleEdit()} >{isEditing? "Update" : "Edit"}</Button> */}
    </Container>
  );
};

export default ChildForm;
