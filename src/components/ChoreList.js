import React, {useEffect, useRef } from 'react';

          /* Redux */

import {connect, useSelector} from 'react-redux';
import getChores from '../action/getChores';

          /* Router */
import {Link, useParams } from 'react-router-dom'

          /* MUI */

import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Modal } from '@material-ui/core';
import child from '../action/child';


          /* ChoreList */

const ChoreList = (props) => {
  const prevChore = useRef()

  useEffect(() => {
    
    props.getChores(props.id)

  }, [props.id])


  

  const singleChore = props.chore.chore

  

  return (
    <div className="chore-wrap"> 
      
      {singleChore && singleChore.length > 0  
    ? singleChore
        .filter(function(chore) {
          return chore.child_id === props.id
        })
        
        .map(chore => (

          <li key={chore.id} type="none">
            <strong >{ chore.name }</strong>
            
          </li>
        
        ))
   
    : <span>No Chores</span>
    
        }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    chore: state.chore.chore
  };
};


export default connect(
  mapStateToProps, {getChores}
)(ChoreList);
