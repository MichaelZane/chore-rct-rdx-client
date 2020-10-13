import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import deleteChild from '../action/deleteChild';
import getChildren from '../action/getChildren';

import login from '../action/login';
import Child from './Child';

const ChildList = (props) => {

  const [child, setChild] = useState()
  
  const exit = () => {
    props.history.goBack()
  }

  useEffect(() => {
    props.getChildren(setChild)
  }, [])

  const deleteChild = id => {
    props.deleteChild(id);
  };
  console.log(getChildren())
  return (
    <div>
      <h3>These are your kids </h3>
      <div className='children-list'>

        <Child />
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

const mapStateToProps = state => { 
  return {
    child: state.child
  } 
   
}

export default connect(
  mapStateToProps, 
  { getChildren },
)(ChildList);