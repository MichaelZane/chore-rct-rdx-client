import { useState } from "react";

          /* Redux */
import { connect } from "react-redux"
import addChores from "../action/addChores"

          /* MUI */

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import { AccountCircle } from '@material-ui/icons';
import { useHistory } from "react-router-dom";

          /* Styling */

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));    



          /* AddChore */

export function AddChore( props ) {

  let childId = localStorage.getItem('childId')
  
  const history = useHistory()

  const [url, setUrl] = useState(null)
  const [alt, setAlt] = useState(null)
  const [ chore, setChore ] = useState({
    name: "",
    description: "",
    chore_score: null,
    child_id: childId,
    imageUrl: url

  });
  
  const handleChanges = e => {
    setChore({
      ...chore,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {

    e.preventDefault();

    const { files } = document.querySelector('input[type=file]');
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', 'chore_preset');

    const options = {
      method: 'POST',
      body: formData,
    };
    
    return fetch('https://api.Cloudinary.com/v1_1/mikezs/image/upload', options)
      .then(res => res.json())
      .then(res => {
        setUrl(res.secure_url)
        setAlt(`An image of ${res.original_filename}`)
        chore.imageUrl = url
        props.addChores(chore)
        reset()
        history.push("/home")
        
      })
      .catch(err => console.error(err))
  
  }

  const reset = () => {
    return setChore({
      name: "",
      description: "",
      chore_score: null,
      child_id: null,
      imageUrl: ""
    })
  }

  const classes = useStyles();
  
  return (
    
    <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          < AccountCircle />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Add Your Chores
        </Typography>
        
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
        
        <Grid item xs={12} sm={6}>
          <TextField
            id="fileInput"
            type="file"
            name="imageUrl"
            onChange={handleChanges}
            value={chore.url}
            className="form-input"
          />
        </Grid>
        <p>
          {url && (
            <img src={url} alt={alt} />
          )}
        </p>
        
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='name'
                name='name'
                variant='outlined'
                required
                fullwidth='true'
                id='name'
                value={chore.name}
                label='Add Chore Name'
                autoFocus
                onChange={handleChanges}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type='text'
                variant='outlined'
                required
                fullwidth='true'
                id='description'
                value={chore.description}
                label='Description'
                name='description'
                autoComplete='description'
                onChange={handleChanges}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullwidth='true'
                name='chore_score'
                label='chore_score'
                type='text'
                id='chore_score'
                value={chore.chore_score}
                onChange={handleChanges}
              />
            </Grid>
            <Grid item xs={12}>
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
            </Grid>
          </Grid>

          <Button
            type='submit'
            fullwidth='true'
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Add Chore
          </Button>
          <Button
            type='button'
            fullwidth='true'
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={() => props.history.push('/home')}
          >
            Cancel
          </Button>
          
        </form>
      </div>

  );
}

export default connect(
  null,
  { addChores }
)(AddChore);

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