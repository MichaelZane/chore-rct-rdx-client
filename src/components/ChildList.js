import { useEffect } from 'react';
import { connect } from 'react-redux';
import deleteChild from '../action/deleteChild';
import getChildren from '../action/getChildren';
import { CircularProgress } from '@material-ui/core';
import Child from './Child';

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