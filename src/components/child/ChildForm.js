import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { useTheme } from '@mui/material/styles';

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

  const theme = useTheme();

  return (
    <Container 
      maxWidth="sm" 
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 1200,
        flexWrap: "wrap",
        zIndex: 1,
        color: "rgb(0, 94, 144)"
      }}
    >
      <CssBaseline />
      <Card 
        raised={true} 
        sx={{
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
          borderLeft: "1px solid"
        }}
      >
        <div 
          sx={{
            marginTop: theme.spacing(8),
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "whiteSmoke"
          }}
        >
          <Avatar 
            sx={{
              margin: theme.spacing(1),
              backgroundColor: theme.palette.secondary.main
            }}
          >
          </Avatar>
          <Typography component="h1" variant="h5">
            Your Child's Details
          </Typography>
          <form
            sx={{
              padding: 20,
              width: "100%",
              marginTop: theme.spacing(3)
            }}
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
              sx={{
                margin: theme.spacing(3, 0, 2)
              }}
            >
              Update Child
            </Button>
            <Button
              type="button"
              variant="contained"
              color="primary"
              sx={{
                margin: theme.spacing(3, 0, 2)
              }}
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
