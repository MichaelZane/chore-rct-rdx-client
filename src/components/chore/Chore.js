import React, { useState } from "react"
/* MUI */
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import { AccountCircle } from "@material-ui/icons";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { FaTimes } from "react-icons/fa";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchChore, editChore } from "../../slices/choreSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "500px",
    height: "100%",
    margin: "20px",
    borderRadius: "15px",
    backgroundColor: "rgba(255,255,255,0.1)",
    position: "relative",
    overflow: "hidden",
    backdropFilter: "blur(2px)",
    color: "rgb(0, 94, 144)",
    boxShadow: "20px 20px 50px rgba(0,0,0,0.5)",
    borderTop: "1px solid rgba(255, 255, 255, 0.5)",
    borderLeft: "1px solid rgba(255, 255, 255, 0.5)",
    label: 'rgb(0, 94, 144)',
    padding: "20px"
    
  },
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "1000px",
    flexWrap: "wrap",
    zIndex: 1,
  },
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    margin: 20
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  btn: {
    width: 200,
    height: 200,
    borderRadius: "50%",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    color: "white",
    border: "none",
    backgroundColor: "silver"

  },
  
  images: {
    width: "100%"
  }
}));

const Chore = () => {

  const { id } = useParams()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const chore = useSelector(state => state.chore.chore)

  const [formData, setformData] = useState({});


  useEffect(() => {

    dispatch(fetchChore(id))
    
  },[])

  useEffect(() => {

    if(chore) {
      setformData(chore);
    }
  }, [chore])

  const handleChanges = (e) => {
    setformData(currentState => {
      return {...currentState,
      [e.target.name]: e.target.value
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editChore({id, ...formData}))
    setformData({})
    navigate("/home")
  }
  const classes = useStyles();

  return (
    
    <Container maxWidth='sm' className={classes.container} >
      {chore ?
      <Card className={classes.root}  raised={true} >
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircle />
        </Avatar>
        <Typography component="h1" variant="h5">
          Update Your Chores
        </Typography>

        <form className={classes.form} onSubmit={handleSubmit} noValidate>
        {/* {preview ? (<Image className={classes.images} src={preview} alt={alt} >
         
        </Image> */}
        {/* ) : (
          <Button className={classes.btn} onClick={(e) => {
            e.preventDefault()
            inputRef.current.click()
          }}
          >Add Image
          </Button>
          ) */}
            {/* <TextField
              style={{display: "none"}}
              id="fileInput"
              inputRef={inputRef}
              type="file"
              name="imageUrl"
              accept="image/*"
              onChange={handleChanges}              
              value={chore.imageUrl}
              className={classes.picFile}
              fullWidth
              margin='normal'
            /> */}
            
              {/* <Select /> */}
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                margin='normal'
                required
                fullWidth
                id="name"
                value={formData?.name }
                label="Add Chore Name"
                autoFocus
                onChange={handleChanges}
              />

            
              <TextField
                type="text"
                variant="outlined"
                required
                fullWidth
                margin='normal'
                id="description"
                value={ formData?.description }

                label="Description"
                name="description"
                autoComplete="description"
                onChange={handleChanges}
              />
            

            
              <TextField
                variant="outlined"
                required
                fullWidth
                margin='normal'
                name="chore_score"
                label="chore_score"
                type="text"
                id="chore_score"
                value={formData?.chore_score }
                onChange={handleChanges}
              />
            
            {/* <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullwidth='true'
                name='completed'
                label='completed'
                type='completed'
                id='completed'
                value={chore.completed}
                autoComplete='current-completed'
                onChange={handleChanges}
              />
            </Grid> */}
         

          <Button
            type="submit"
            fullWidth
            variant="contained"
            margin='normal'
            color="primary"
            className={classes.submit}
          >
            Update Chore
          </Button>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => navigate("/home")}
          >
            Cancel
          </Button>
        </form>
      </div>
      </Card>
      : <i className="fa fa-spinner" aria-hidden="true"></i>
      }
    </Container>
  );
};
export default Chore
/* 
  id: null,
  name: "",
  bonus_pts: null,
  description: "",
  comments: "",
  child_id: "",
  chore_score: null,
  clean_strk: null,
  completed: false,
  due_date: null,
*/
