import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import SignUpChild from './SignUpChild';
import deleteChild from '../action/deleteChild';
import getChildren from '../action/getChildren';
import Child from './Child';

const ChildList = props => {
  // console.log(props);
  useEffect(() => {
    // getChildren();
    console.log(props.id);
    props.getChildren(props.id); //props.id
  }, []);

  // const getChildren = () => {
  //   // console.log('THis is the id from childlist: ', props.id);
  //   props.getChildren(props.id); //props.id
  // };

  const deleteChild = id => {
    props.deleteChild(id);
  };

  return (
    <div>
      <h3>These are your kids </h3>
      <div className='children-list'>
        {props.childrenList.map(item => {
          // console.log("Here i am", item);
          return (
            <div>
              {/* <Link to={`/childrenlist/${item}`} */}
              <Child item={item} />
              <button onClick={() => deleteChild(item.id)}>delete</button>
              <Link to={`/updateChild/${item.id}`}>
                <button>Update</button>
              </Link>
            </div>
          );
        })}
      </div>
      <Link to='/signUpChild'>
        <button>Add child </button>
      </Link>
    </div>
  );
};

const mapStateToProps = ({getChildrenReducer, loginReducer}) => {
  // console.log('MapState: ', loginReducer);
  // console.log('ID is: ', loginReducer.userID);

  return {
    childrenList: getChildrenReducer.children,
    id: loginReducer.userID
  };
};

export default connect(
  mapStateToProps,
  {getChildren, deleteChild}
)(ChildList);

// <Link to={`./childrenlist/${item.id}`}>{item.fstname}</Link>
