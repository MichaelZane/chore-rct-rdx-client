import React, { useEffect } from 'react';
import addChild from '../action/addChild'
import { connect } from 'react-redux'



export default function Child(props) {
  
 

  return (
    <div>
      {/* <Img src={props.url} alt={`photo of: ${props.name}`} /> */}
          <p>Name: {props.fstname} </p>
          <p>Username: {props.username} </p>
    </div>   
  );
}



/* fstname,
      lstname, 
      username,
      password,
      parent_id */