import React, { useState } from "react";

          /* Redux */
import { connect } from "react-redux"
import addChores from "../action/addChores"

          /* MUI */

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import addChild from '../action/addChild';
import { AccountCircle } from '@material-ui/icons';
import Upload from "./Upload";


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

  const [ formData, setFormData ] = useState({
    name: "",
    description: "",
    chore_score: "",
    child_id: childId,

  });

  const handleChanges = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addChores(formData, props.history)

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
        < Upload />
        <form className={classes.form} onSubmit={handleSubmit} noValidate>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='name'
                name='name'
                variant='outlined'
                required
                fullWidth
                id='name'
                value={formData.name}
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
                fullWidth
                id='description'
                value={formData.description}
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
                fullWidth
                name='chore_score'
                label='chore_score'
                type='text'
                id='chore_score'
                value={formData.chore_score}
                onChange={handleChanges}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='completed'
                label='completed'
                type='completed'
                id='completed'
                value={formData.completed}
                autoComplete='current-completed'
                onChange={handleChanges}
              />
            </Grid>
          </Grid>

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Add Chore
          </Button>
          <Button
            type='button'
            fullWidth
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
  {addChores}
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