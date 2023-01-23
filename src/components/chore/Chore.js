import React, { useState } from "react"
/* MUI */
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
// import { AccountCircle } from "@material-ui/icons";
import Typography from "@mui/material/Typography";
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
import { useTheme } from '@mui/material/styles';

const Chore = () => {

  const { id } = useParams()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const theme = useTheme()

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
      {chore ?
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
          backgroundColor: theme.palette.secondary.main,
         }}
        >
          {/* <AccountCircle /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Update Your Chores
        </Typography>

        <form  
          onSubmit={handleSubmit} 
          noValidate
          sx={{
            width: "100%",
            marginTop: theme.spacing(3)
          }}
        >
        {/* {preview ? (<Image sx={{ width: "100%" }} src={preview} alt={alt} >
         
        </Image> */}
        {/* ) : (
          <Button
            sx={{
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
            }}
            onClick={(e) => {
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
            sx={{
              margin: theme.spacing(3, 0, 2)
            }}
          >
            Update Chore
          </Button>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              margin: theme.spacing(3, 0, 2),
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
            }}
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
