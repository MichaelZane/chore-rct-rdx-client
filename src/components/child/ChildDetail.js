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
import Container from "@mui/material/Container";
import Copyright from "../Copyright";
import { CircularProgress } from "@mui/material";
import { useTheme } from "@mui/material/styles";


const ChildDetail = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const theme = useTheme()

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
        color: "rgb(0, 94, 144)",
      }}
    >
      <CssBaseline />
      {child ?
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
          borderLeft: "1px solid rgba(255, 255, 255, 0.5)",
        }}
      >
        <div 
          sx={{
            marginTop: theme.spacing(8),
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "whiteSmoke",
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
              marginTop: theme.spacing(3),
            }}
            onSubmit={submitHandler} 
            noValidate
          >
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
