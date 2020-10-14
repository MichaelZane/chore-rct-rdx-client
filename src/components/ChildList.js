import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import deleteChild from '../action/deleteChild';
import getChildren from '../action/getChildren';
import Loader from 'react-loader-spinner'
import login from '../action/login';
import Child from './Child';

const ChildList = ( props ) => {

  
  
  const exit = () => {
    props.history.goBack()
  }

  useEffect(() => {
    props.getChildren()
  }, [getChildren])

  const deleteChild = id => {
    props.deleteChild(id);
  };
  console.log("xxxxxxxxxxxxx",props.children)
  
  return (
    <div className="children-wrap">     
      <div>
        <h3>These are your kids </h3>
        <div>
          <p> {console.log("jsx >>>>>>>>>>",props.children)} </p>
        </div>
               
          <button onClick={() => deleteChild()}>delete</button>
        
        <Link to={`/updateChild`}>
          <button>Update</button>
        </Link>
      
        <Link to='/signUpChild'>
          <button>Add child </button>
        </Link>
      
        <button onClick={() => exit()}>Exit</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => { 
  return {
    children: state.children
  } 
   
}

export default connect(
  mapStateToProps, 
  { getChildren },
)(ChildList);