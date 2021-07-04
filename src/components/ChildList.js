import { useEffect } from 'react';

        /* Router */


         /* Redux */
import { connect } from 'react-redux';

import deleteChild from '../action/deleteChild';
import getChildren from '../action/getChildren';


/* MUI */
import { makeStyles } from '@material-ui/core/styles';
//import clsx from 'clsx';

import { red } from '@material-ui/core/colors';

import { CircularProgress } from '@material-ui/core';


import Child from './Child';

           /* Styles */



          /* ChildList */

const ChildList = props => {
 
  useEffect(() => {  

    props.getChildren(props.id)
    
          
  }, [])

  const childProps = props.childs.child

  return (
    <div className="child-card-wrap">
    {childProps && childProps.length > 0 
    ? childProps.map((child, index) => (
      
      <Child key={index.id}
        fstname={child.fstname}
        id={child.id}
        username={child.username}        
        />       
      )
    )
    : <CircularProgress/>
    }    
  </div>
  );
};

const mapStateToProps = (state) => { 

  return {
    childs: state.child.child,


  }    
}

export default connect(
  mapStateToProps, 
  { getChildren, deleteChild })(ChildList);