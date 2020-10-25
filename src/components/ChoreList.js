import React, {useEffect, useState} from 'react';

          /* Redux */

import {connect} from 'react-redux';
import getChores from '../action/getChores';

          /* MUI */

import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Modal } from '@material-ui/core';


         /* Styles */

// function rand() {
// return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
// const top = 50 + rand();
// const left = 50 + rand();

// return {
//   top: `${top}%`,
//   left: `${left}%`,
//   transform: `translate(-${top}%, -${left}%)`,
// };
// }

// const useStyles = makeStyles((theme) => ({
// paper: {
//   position: 'absolute',
//   width: 400,
//   backgroundColor: theme.palette.background.paper,
//   border: '2px solid #000',
//   boxShadow: theme.shadows[5],
//   padding: theme.spacing(2, 4, 3),
// },
// })); 
        
          /* Modal */

          /* ChoreList */

const ChoreList = (props) => {

  const {getChores, chore, child_id} = props

  
  useEffect(() => {

    getChores(props.child_id);

  }, []);

  const chores = props.chore.chore

  

  return (
    <ul className="chore-wrap"> 
      
      {chores && chores.length > 0 
    ? chores.map((chre, index) => (
      
      <li key={chre.id} > 
      {console.log(child_id, chre.child_id)}
        {chre.name}
        {/* <p>Description: {chre.description}</p>
        <p>{chre.photo_obj}</p>
        <p>Comments: {chre.comments}</p>
        <p>Completed: {chre.completed}</p>
        <p>Score: {chre.chore_score}</p>
        <p>Bonus: {chre.bonus_pts}</p>
        <p>Streak: {chre.clean_strk}</p> */}
        
      </li>  
      
      )
    )
    : <CircularProgress/>
    }
    </ul>
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
