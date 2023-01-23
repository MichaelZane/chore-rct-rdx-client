import { useState, useRef, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { addChores } from "../../slices/choreSlice";
/* MUI */
import Container from '@mui/material/Container'
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTheme } from '@mui/material/styles';
import Card from "@mui/material/Card";
/* Cloudinary Bucket */
import {AdvancedImage} from '@cloudinary/react';
import {fill} from "@cloudinary/url-gen/actions/resize";
import Select from "../Select"


export default function AddChore() {
  
  const inputRef = useRef()
  const navigate = useNavigate();
  const [preview, setPreview] = useState();
  const [image, setImage] = useState()
  const [url, setUrl] = useState();
  const [alt, setAlt] = useState();
  const location = useLocation()
  const { childId } = location.state
  const [chore, setChore] = useState({
    name: "",
    description: "",
    chore_score: "",
    child_id: childId,
    imageUrl: "",
  });

  const dispatch = useDispatch();
  const theme = useTheme()

  useEffect(() => {
    console.log("New Image")
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
      console.log("HandleChanger**")
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

    const setImageUrl = (url) => {
      dispatch(addChores({...chore, imageUrl: url }));
    };    

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
      if(res.status === 200) {
      setImageUrl(data.url)
      reset()
      } else alert("Creating Chore failed")
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

  return (
    
    <Container 
      maxWidth='sm' 
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "1000px",
        flexWrap: "wrap",
        zIndex: 1
      }}  
    >
      <Card 
        raised={true} 
        sx={{
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
        }}
      >
      <div 
        sx={{
          marginTop: theme.spacing(4),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 20,
          margin: 20
        }}
      >
        <Avatar 
          sx={{
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main
          }}
        >
          {/* <AccountCircle /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Add Your Chores
        </Typography>

        <form 
          onSubmit={handleSubmit} 
          noValidate
          sx={{
            width: "100%",
            marginTop: theme.spacing(3)
          }}
          >
        {preview ? (<AdvancedImage sx={{ width: "100%" }} src={preview} alt={alt} >
         
        </AdvancedImage>
        ) : (
          <div className="btn-wrapper">
          <Button 
            sx={{
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
            }}
            onClick={(e) => {
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
              sx={{  }}
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
            sx={{
              margin: theme.spacing(3, 0, 2)
            }}
          >
            Add Chore
          </Button>
          <Button
            type="button"
            fullWidth
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
