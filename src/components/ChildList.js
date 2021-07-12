import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import deleteChild from '../action/deleteChild';
import getChildren from '../action/getChildren';
import { CircularProgress } from '@material-ui/core';
import Child from './Child';

const ChildList = props => {

  const dispatch = useDispatch()
 
  useEffect(() => {  

    props.getChildren()  
          
  }, [])
  
const handleEdit = () => {
  
}

  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete child")){
      dispatch(deleteChild(id))
    }
  }

  const childProps = props.childs.child
  
  return (
    <div className="child-card-wrap">
    {childProps && childProps.length > 0 
    ? childProps.map((child) => (
      
      <Child key={child.id}
        id={child.id}
        fstname={child.fstname}
        lstname={child.lstname}
        username={child.username} 
        handleDelete={handleDelete}
        onEdit={handleEdit}
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
// const mapDispatchToProps = (dispatch, id) => {
//   dispatch(deleteChild(id))
// }

export default connect(
  mapStateToProps, 
  { getChildren, deleteChild })(ChildList);