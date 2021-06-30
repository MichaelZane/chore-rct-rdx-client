import { useEffect, useState } from 'react';
        /* Redux */
import { connect } from 'react-redux'
// import updateResult from "../slices/updateSlice"
// import deleteChild from "../slices/deleteSlice"
// import getChore from '../slices/choreSlice';
import getChildren from "../action/getChildren"
import getChores from '../action/getChores';


        /* Router */
import {Link} from "react-router-dom"

        /* MUI */
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { AccountCircle } from '@material-ui/icons';
import Card from '@material-ui/core/Card';

        
//import { ChildChores } from './ChildChores';
import ChoreList from './ChoreList';

       /* styling starts here */

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
    width: '100%', 
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Child = ( props ) => {

  const [child, setChild] = useState("")
	
  const classes = useStyles();

  const changeHandler = event => {
    setChild({...child, [event.target.name]: event.target.value});

  };

  const submitHandler = e => {
    e.preventDefault();
    props.updateResult(child);
    props.history.push('/home');

    setChild({
      fstname: '',
      lstname: '',
      username: '',
      
    });
  };


  	
	useEffect(() => {
    
    props.getChildren(child.id)

  }, [])

  const getChildren = props.child
  
  return (
    <div>     
      
      <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          < AccountCircle />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Your Child Details
        </Typography>
        <form className={classes.form} onSubmit={submitHandler} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='fstname'
                name='fstname'
                variant='outlined'
                required
                fullwidth
                id='fstname'
                value={getChildren.fstname}
                autoFocus
                onChange={changeHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type='text'
                variant='outlined'
                required
                fullwidth
                id='lstname'
                value={getChildren.lstname}
                name='lstname'
                autoComplete='lstname'
                onChange={changeHandler}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullwidth
                name='username'
                type='text'
                id='username'
                value={getChildren.username}
                autoComplete='current-username'
                onChange={changeHandler}
              />
            </Grid>            
          </Grid>

          <Button
            type='submit'
            fullwidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onSubmit={submitHandler}
          >
            Update Child
          </Button>
          <Button
            type='button'
            fullwidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={() => props.history.push('/home')}
          >
            Cancel
          </Button>
          
        </form>
        <h2> {getChildren.fstname}'s Chores</h2>
        <Card item xs={12}
          variant='outlined'
          fullwidth
        > {<Link cursor="pointer" to={`/chore`}><ChoreList id={getChildren.id}/> </Link>} </Card>
        
        
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
     
    </div>
    
  )
}

const mapStateToProps = state => {
  return {
    child: state.child,

  }
}

export default connect(mapStateToProps, { getChildren, getChores })(Child)