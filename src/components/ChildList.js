import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import deleteChild from '../action/deleteChild';
import getChildren from '../action/getChildren';
import login from '../action/login';
import Child from './Child';

const ChildList = ( props ) => {

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

  const List = ({childProps, fallback}) => {
    if(!childProps) {
      return fallback
    }
    else if(childProps.length === 0) {
      return "You have no children added yet."
    }
    else {
      return childProps.map(chld => {
        return <div key={chld.id}>
          <Link to={"/chore"}>
          <p>{chld.fstname}</p>
          </Link>
        </div>
      })
    }
  }

  return (
    
    <div className="children-wrap"> 
        
      <div>
        <h3>These are your kids </h3>
        <div className="children" >
          <List childProps={childProps} fallback={"Loading..."} /> 
        </div>
               
          <button onClick={() => deleteChild()}>delete</button>
        
        <Link to={`/updateChild`}>
          <button>Update</button>
        </Link>
      
        <Link to='/signUpChild'>
          <button>Add child </button>
        </Link>
      

      </div>
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