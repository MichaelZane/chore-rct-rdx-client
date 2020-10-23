import React, { useEffect, useState } from 'react';

        /* Router */
import { NavLink, Link } from 'react-router-dom';

         /* Redux */
import { connect } from 'react-redux';
import getChores from '../action/getChores';
import addChores from '../action/addChores';
import deleteChores from '../action/deleteChores';
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

  const fetch = props.getChildren

  useEffect(() => {
    fetch()
    
  }, [fetch])


  
  const exit = () => {
    props.history.goBack()
  }

  const childProps = props.childs.child

  return (
    <div className="child-card-wrap">
    {childProps && childProps.length > 0 
    ? childProps.map((chld, index) => (
      
    
        <Card 
        key={chld.id}
        className={classes.root}
        
        >
          <Typography>Id: {chld.id}</Typography>
          
          <CardHeader
            avatar={
              <Avatar 
              aria-label="child" 
              className={classes.avatar}
              src=""
              >
              {chld.fstname.toUpperCase().charAt(0)}

              </Avatar>
            }
            titleTypographyProps={{variant: "h5"}}
          title={<NavLink to={'/child'}
          >{chld.fstname}</NavLink>}
            subheader={chld.username}
            
          />
          
         
            {/* <ChoreList /> */}
          
          
    {/* Expand into chorelist for child */}
          {/* <CardActions disableSpacing>
            
            <Typography>See Chores</Typography>

            <IconButton
              color="primary"
              fontSize="large"
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="see chore"
              
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
              <ChoreList />
              <Button 
                variant="text"
              
                icon=""
              >Remove</Button>
              
              <Link to={`/updateChild`}>
              <Button
                variant="text"
              >Update</Button>
              </Link>
              <Link to={'/addChore'}>
              <Button
                variant="text"
              >Add chore </Button>
              </Link>
            </CardContent>
          </Collapse>           */}
        </Card>
      )
    )
    : <CircularProgress />
    }
    
  </div>
  );
};



const mapStateToProps = (state) => { 
    
  return {
    childs : state.child.child
    
 
  }    
}

// const mapDispatchToProps = dispatch => {
//   return {
//     children: childProps => dispatch(children(childProps))
//   }
// }

export default connect(
  mapStateToProps, 
  {getChildren})(ChildList);