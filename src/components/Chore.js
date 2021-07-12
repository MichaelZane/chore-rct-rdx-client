import React, { useState, useEffect } from 'react';

      /* Redux */
import { connect } from "react-redux"
import getChores from "../action/getChores"
import chore from "../action/chore";

      /* MUI */
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import { Link } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { AccountCircle } from '@material-ui/icons';

import Copyright from './Copyright';
import { useParams } from 'react-router-dom';
  
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
  
  const Chore = ( props ) => {

    const { id } = useParams()
  
    const [chore, setChore] = useState("")
    
    const classes = useStyles();
  
    const changeHandler = event => {

      setChore({...chore, [event.target.name]: event.target.value});
  
    };
  
    const submitHandler = e => {
      e.preventDefault();

      props.history.push('/home');
  
      setChore({
        name: '',
        description: '',
        chore_score: '',
        
      });
    };
      
    const getChore = props.getChores

    useEffect(() => {
      
      getChore(id)
    
    }, [])
 
    return (
      
      <div>     
        {getChore && getChore.map(one => (
        <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            < AccountCircle />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Your Chore Details
          </Typography>
          <form className={classes.form} onSubmit={submitHandler} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='name'
                  name='name'
                  variant='outlined'
                  required
                  fullWidth
                  id='name'
                  value={getChore.name}
                  autoFocus
                  onChange={changeHandler}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type='text'
                  variant='outlined'
                  required
                  fullWidth
                  id='description'
                  value={getChore.description}
                  name='description'
                  autoComplete='description'
                  onChange={changeHandler}
                />
              </Grid>
  
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='chore_score'
                  type='text'
                  id='chore_score'
                  value={getChore.chore_score}
                  autoComplete='current-chore_score'
                  onChange={changeHandler}
                />
              </Grid>
              
                
              
              
              
            </Grid>
  
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              onSubmit={submitHandler}
            >
              Update Chore
            </Button>
  
            {/* <Card item xs={12}
                  variant='outlined'
                  fullWidth
                > {<Link cursor="pointer" to={`/chore/`}><ChoreList id={getChore.id}/></Link>} </Card> */}
            
          </form>
          
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
        </Container>
        ))}
      </div>
      
    )
  }
  
  const mapStateToProps = state => {
    return {
      oneChore: state.chore.chore,
  
    }
  }
  
  export default connect(mapStateToProps, { chore })(Chore)
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