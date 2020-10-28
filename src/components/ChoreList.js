import React, {useEffect, useState} from 'react';

          /* Redux */

import {connect} from 'react-redux';
import getChores from '../action/getChores';

          /* Router */
import {Link} from 'react-router-dom'

          /* MUI */

import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Modal } from '@material-ui/core';


          /* ChoreList */

const ChoreList = (props) => {

  const {getChores, chore, id} = props

  useEffect(() => {
    
    getChores(props.id);

  }, []);

  const filterChore = () => {
    return props.id === chores.child_id
  }

  const chores = props.chore.chore

  return (
    <div className="chore-wrap"> 
      
      {chores && chores.length > 0 
    ? chores
        .filter(chore => chore.child_id === props.id)
        .map(chore => (
          <li key={chore.id} type="none">
            {chore.name}
          </li>
        ))
        
        
      
      
    : <CircularProgress/>
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
