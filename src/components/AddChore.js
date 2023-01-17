import { useState, useRef, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addChores } from "../slices/choreSlice";

/* MUI */
import Container from '@material-ui/core/Container'
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { AccountCircle } from "@material-ui/icons";
import Card from "@material-ui/core/Card";
/* Cloudinary Bucket */
import { Image } from 'cloudinary-react';

import Select from "./Select"

/* Styling */

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
    // alignItems: "center",
    // justifyContent: "center",
    fontSize: 16,
    color: "white",
    border: "none",
    backgroundColor: "silver"

  },
  
  images: {
    width: "100%"
  }
}));

/* AddChore */

export default function AddChore() {
  
  const inputRef = useRef()
  const navigate = useNavigate();
  const [preview, setPreview] = useState();
  const [image, setImage] = useState()
  const [url, setUrl] = useState();
  const [alt, setAlt] = useState();
  const [chore, setChore] = useState({
    name: "",
    description: "",
    chore_score: "",
    child_id: 1,
    imageUrl: "",
  });

  const dispatch = useDispatch();


  useEffect(() => {
    if(image) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null)
    }
  }, [image])

    const handleChanges = (e) => {
    setChore({
      ...chore,
      [e.target.name]: e.target.value,
    });
  };
  const handleInputChange = useCallback((e) => {
    
      const file = e.target.files[0]
      if(file && file.type.substr(0,5) === "image") {
        setImage(file)        
      } else {
        setImage(null)
      }
    }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { files } = document.querySelector("input[type=file]");
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "chore_preset");
    setPreview(files);
    const options = {
      method: "POST",
      body: formData,
    };

    try {
      const res = await fetch("https://api.Cloudinary.com/v1_1/mikezs/image/upload", options);
      const data = await res.json();
      setUrl(data.public_id);

      dispatch(addChores(chore));
    } catch (err) {
      return console.error(err);
    }
  };

  const reset = () => {
    return setChore({
      name: "",
      description: "",
      chore_score: null,
      child_id: null,
      imageUrl: "",
    });
  };
  
  const classes = useStyles();

  
 
  return (
    
    <Container maxWidth='sm' className={classes.container} >
      <Card className={classes.root}  raised={true} >
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircle />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add Your Chores
        </Typography>

        <form className={classes.form} onSubmit={handleSubmit} noValidate>
        {preview ? (<Image className={classes.images} src={preview} alt={alt} >
         
        </Image>
        ) : (
          <div className="btn-wrapper">
          <Button className={classes.btn} onClick={(e) => {
            e.preventDefault()
            inputRef.current.click()
          }}
          >Add Image
          </Button>
          </div>
          )}
            <TextField
              style={{display: "none"}}
              id="fileInput"
              inputRef={inputRef}
              type="file"
              name="imageUrl"
              accept="image/*"
              onChange={handleInputChange}              
              value={chore.imageUrl}
              className={classes.picFile}
              fullWidth
              margin='normal'
            />
            
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
            Add Chore
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
    </Container>
  );
}

/* 
  name	Required
description	Required
Comments	
Completed	
due_date	
chore_score	Required
bonus_pts	
clean_strk	
photo_obj	
child_id	Required

*/
