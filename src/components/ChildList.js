import { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import deleteChild from '../action/deleteChild';
import getChildren from '../action/getChildren';
import { CircularProgress } from '@material-ui/core';
import Child from './Child';

const ChildList = props => {
  
  const [isEditing, setIsEditing] = useState(false)
  const [info, setInfo] = useState({
    fstname: '',
    lstname: '',
    username: '',
    password: '',
  })
  
  const dispatch = useDispatch()

  const getList = useSelector(state => state.child.child)
  
  useEffect(() => {  

    dispatch(getChildren() )
            
  }, [])

  
  const handleEdit = (id) => {
    setIsEditing(true)
    

  }

  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete child")){
      dispatch(deleteChild(id))
    }
  }

  

  return (
    <div className="child-card-wrap">
    {getList && getList.length > 0 
    ? getList.map((child) => (
      
      <Child key={child.id}
        id={child.id}
        fstname={child.fstname}
        lstname={child.lstname}
        username={child.username} 
        password={child.password}
        handleDelete={handleDelete}
        handleEdit={handleEdit}        
        />
        
      )
    )
    : <CircularProgress/>
    }    
  </div>
  );
};
export default ChildList
// const mapStateToProps = (state) => { 

//   return {

//     child: state.child,

//   }    
// }

// export default connect(
//   mapStateToProps, 
//   { getChildren, deleteChild })(ChildList);