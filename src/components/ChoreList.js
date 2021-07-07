import React, {useEffect, useRef, useState } from 'react';

          /* Redux */

import { connect } from 'react-redux';
import getChores from '../action/getChores';

          /* Router */
import {Link, useParams } from 'react-router-dom'

          /* MUI */

import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Modal } from '@material-ui/core';
import child from '../action/child';

          /* ChoreList */

const ChoreList = (props) => {



  useEffect(() => {
    
    props.getChores()
    
  },[])

  const childChore = props.chore
  
  return (
    <div className="chore-wrap"> 
      
      {childChore && childChore.length > 0  
    ? childChore
        .filter(function(chore) {
          return chore.child_id === props.id
          })
        .map(chore => (

          <li key={chore.id} type="none">
            <strong ><Link  to='/chore/:id'>{ chore.name }</Link></strong>  
                    
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
  mapStateToProps, { getChores }
)(ChoreList);