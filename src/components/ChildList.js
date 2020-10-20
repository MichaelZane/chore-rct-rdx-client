import React, { useEffect, useState } from 'react';

        /* Router */
import { Link } from 'react-router-dom';

         /* Redux */
import { connect } from 'react-redux';
import Chores from '../action/deleteChild';
import addChores from '../action/deleteChild';
import deleteChores from '../action/deleteChild';
import deleteChild from '../action/deleteChild';
import getChildren from '../action/getChildren';
import ChoreList from './ChoreList';

import Child from './Child';

/* MUI */
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { Button } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { CircularProgress } from '@material-ui/core';



           /* Styles */

const useStyles = makeStyles((theme) => ({
  root: {
    
    width: 225,
    margin: 10,
    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


          /* ChildList */



const ChildList = ( props ) => {

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
 
  }

  const fetch = props.getChildren

  useEffect(() => {
    fetch()
    
  }, [fetch])
  
  const exit = () => {
    props.history.goBack()
  }



  const deleteChild = id => {
    props.deleteChild(id);
  };

  const childProps = props.child.child.child

  return (
    <div className="child-card-wrap">
    {childProps && childProps.length > 0 
    ? childProps.map((chld, index) => (
      
    
        <Card 
        key={chld.id}
        className={classes.root}
        
        >
          <CardHeader
            avatar={
              <Avatar 
              aria-label="child" 
              className={classes.avatar}
              src=""
              >
                M
              </Avatar>
            }
            title={chld.fstname}
            subheader={chld.username}
          />

          <CardContent>

            <Button 
            onClick={() => deleteChild(chld.id)}
            variant="text"
            >Remove</Button>

            <Link to={`/updateChild/`}>
                <Button
                variant="text"
                >Edit</Button>
            </Link>
            
            <Link to={`/chorelist/`}>
                <Button
                variant="text"
                >Chores</Button>
            </Link>

          </CardContent>
          
          <CardActions disableSpacing>
            
            <Typography>Show Chores</Typography>

            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show chore"
              
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse 
            in={expanded} 
            timeout="auto" 
            unmountOnExit>
            <CardContent>
              <Typography >Chores:</Typography>
              {/* <ChoreList /> */}
              <Button 
              onClick={() => deleteChores()}
              icon=""
              >Remove</Button>
              
              <Link to={`/updateChild`}>
              <Button>Update</Button>
              </Link>
              <Link to='/addChore'>
              <Button>Add chore </Button>
              </Link>
            </CardContent>
          </Collapse>          
        </Card>
      )
    )
    : <CircularProgress/>
    }
  </div>
  );
};



const mapStateToProps = (state) => { 
    
  return {
    child : state.child
  }    
}

const mapDispatchToProps = dispatch => {
  return { 
    getChildren,
    

  }
}


export default connect(
  mapStateToProps, 
  mapDispatchToProps)(ChildList);