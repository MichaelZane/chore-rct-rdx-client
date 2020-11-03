import React, { useEffect, useState } from 'react';
        /* Redux */
import { connect } from 'react-redux'
import updateChild from "../action/updateChild"
import deleteChild from "../action/deleteChild"
import getChores from '../action/getChores';
import child from "../action/child"


        /* Router */
import {Link} from "react-router-dom"

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
import { AccountCircle } from '@material-ui/icons';

       /* styling starts here */


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

const Child = ( props ) => {
	
  const classes = useStyles();
  
  const childId = props.location.idProps
	
	useEffect(() => {
    props.child(props.match.params.id)
  }, [])


  


  return (
    <div>     
      <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          < AccountCircle />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Child Details
        </Typography>
        <form className={classes.form}  >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              
              <TextField
                autoComplete='fstname'
                name='fstname'
                variant='outlined'
                required
                fullWidth
                id='fstname'
                label='First Name'
								autoFocus
								value={props.name}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type='text'
                variant='outlined'
                required
                fullWidth
                id='lstname'
                label='Last Name'
                name='lstname'
                autoComplete='lstname'
                value={props.lstname}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='username'
                label='Username'
                type='text'
                id='username'
                autoComplete='current-username'
                value={props.username}
              />
            </Grid>
          </Grid>

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={() => props.history.push(`/justchild/${childId}`)}
          >
            Update
          </Button>
          
          
        </form>
      </div>

    </Container>
     
    </div>
    
  )
}

const mapStateToProps = state => {
  return {
    details: state.details.details,

  }
}

export default connect(mapStateToProps, {child, updateChild, deleteChild, getChores})(Child)