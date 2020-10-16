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
import addChild from '../action/getChildren';

import Child from './Child';

/* MUI */
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { Button } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { CircularProgress } from '@material-ui/core';
import { deleteChoresReducer } from '../reducer/deleteChoresReducer';

           /* Styles */

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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
    ? childProps.map(chld => (
      
    
        <Card 
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
            onClick={() => deleteChild()}
            variant="outlined"
            >Remove</Button>
               
          </CardContent>
          
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <span>Show Chores</span>

            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show chore"
              size="large"
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


export default connect(
  mapStateToProps, 
  { getChildren })(ChildList);