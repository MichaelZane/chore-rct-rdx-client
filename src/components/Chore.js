import React, { useState } from "react"
/* MUI */
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import { AccountCircle } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import { FaTimes } from "react-icons/fa";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { getChores, selectChores } from "../slices/choreSlice";

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
  const inputRef = useRef()

  const { id } = useParams()

  const dispatch = useDispatch()

  const history = useNavigate()

  const getChore = useSelector(selectChores)

  const editChore = getChore.find((child) => child.id === id);

  const [chore, setChore] = useState({
    name: editChore.name,
    description: editChore.description,
    chore_score: editChore.chore_score,
    child_id: 1,
    
  });

  useEffect(() => {
    dispatch(getChore())
  })

  const handleChanges = (e) => {
    setChore({
      ...chore,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const classes = useStyles();

  return (
    <Container maxWidth='sm' className={classes.container} >
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
                value={chore.name}
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
                value={chore.description}
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
                value={chore.chore_score}
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
            onClick={() => history.push("/home")}
          >
            Cancel
          </Button>
        </form>
      </div>
      </Card>
    </Container>
  );
};
export default Chore
// <div>
//   <strong>{chore.name}</strong>
//   <p>{chore.photo_obj}</p>
//   <p>{chore.bonus_pts}</p>
//   <p>{chore.chore_score}</p>
//   <p>{chore.clean_strk}</p>
//   <p>{chore.comments}</p>
//   <p>{chore.completed}</p>
//   <p>{chore.description}</p>
//   <p>{chore.due_date}</p>

// </div>

/* 
bonus_pts: null
child_id: 1
chore_score: 10
clean_strk: null
comments: null
completed: false
description: "test #1"
due_date: null
id: 1
name: "a chore #1"
photo_obj: null
*/
