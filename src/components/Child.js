import React, { useEffect } from 'react';
import addChild from '../action/addChild'
import { connect } from 'react-redux'



function Child(props) {
  
  useEffect(() => {
    props.addChild()
  }, [])

  return (
    <div>
      <h2>{}</h2>
      <h2></h2>
    </div>
  );
}

const mapDispatchToProps = { 
   
  addChild 
}

export default connect(
  null, mapDispatchToProps,

)(Child);

/* fstname,
      lstname, 
      username,
      password,
      parent_id */