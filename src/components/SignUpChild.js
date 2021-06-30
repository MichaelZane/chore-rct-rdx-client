import React, {useState} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
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


// Styling Sign Up Form

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' to='/'>
        Track `Em
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

//   Function Starts Here

const SignUpChild = props => {

 

  const [state, setState] = useState({
    parent_id: localStorage.getItem("userId"),
    fstname: '',
    lstname: '',
    username: '',
    password: '',
    isEditing: false
  });

  const changeHandler = event => {
    setState({...state, [event.target.name]: event.target.value});

  };

  const submitHandler = e => {
    e.preventDefault();
    props.addChild(state);
    props.history.push('/home');

    setState({
      fstname: '',
      lstname: '',
      username: '',
      password: '',
      
    });
  };

  const classes = useStyles();

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          < AccountCircle />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Add Your Child
        </Typography>
        <form className={classes.form} onSubmit={submitHandler} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='fstname'
                name='fstname'
                variant='outlined'
                required
                fullWidth
                id='fstname'
                value={state.fstname}
                label='First Name'
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
                id='lstname'
                value={state.lstname}
                label='Last Name'
                name='lstname'
                autoComplete='lstname'
                onChange={changeHandler}
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
                value={state.username}
                autoComplete='current-username'
                onChange={changeHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                value={state.password}
                autoComplete='current-password'
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
          >
            Add Child
          </Button>
          
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default connect(
  null,
  {addChild}
)(SignUpChild);
