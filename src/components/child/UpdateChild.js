import React, {useState} from 'react'
import {Link, useParams} from 'react-router-dom';
import Avatar from '@mui/materialAvatar';
import Button from '@mui/materialButton';
import CssBaseline from '@mui/materialCssBaseline';
import TextField from '@mui/materialTextField';
import Grid from '@mui/materialGrid';
import Box from '@mui/materialBox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@mui/materialTypography';
import {makeStyles} from '@mui/materialstyles';
import Container from '@mui/materialContainer';

// Styling Sign Up Form

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' to='/'>
        HomeChoreTracker
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

const UpdateChild = props => {
  console.log("PPPROOPSS>>>", props)
  const {id} = useParams();

  const [state, setState] = useState({
    parent_id: props.parentId,
    fstname: '',
    lstname: '',
    username: '',
    id: id
  });

  const changeHandler = e => {
    setState({...state, [e.target.name]: e.target.value});
  };

  const submitHandler = e => {
    e.preventDefault();
    props.updateChild(state);

    setState({
      fstname: '',
      lstname: '',
      username: '',
      password: ""
    });

    props.history.push('/home');
  };

  const classes = useStyles();

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Update a child
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
          </Grid>

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Update
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link to='/childLogin'>Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default UpdateChild
