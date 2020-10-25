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

import Child from './ChildDetail';

/* MUI */
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
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
        key={index}
        className={classes.root}
        
        >
          <Typography 
          > <Button
            onClick={() => deleteChild(chld.id)  }
          ><span>X</span></Button>
          </Typography>
          
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
          title={<NavLink to={'/childdetail'}
          >{chld.fstname}</NavLink>}
            subheader={chld.username}
            
          />
          <CardContent>
            <ChoreList child_id={chld.id}/>
          </CardContent>
        
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
    childs : state.child.child,
    
    
 
  }    
}

export default connect(
  mapStateToProps, 
  {getChildren, deleteChild})(ChildList);