import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import getChores from '../action/getChores';
import { CircularProgress } from '@material-ui/core';

const ChoreList = (props) => {

  const fetchChores = props.getChores
  
  console.log("I AM PROPS>>>>>", props);
  useEffect(() => {
    fetchChores();
  }, [fetchChores]);

  const chores = props.choresList

  return (
    <div>
      {chores && chores.length > 0 
    ? chores.map((chre, index) => (
      <div key={chre.id}>
        <p>{chre.name}</p>
        <p>{chre.description}</p>
        <p>{chre.comments}</p>
        <p>{chre.completed}</p>
        <p>{chre.chore_score}</p>
        <p>{chre.bonus_pts}</p>
        <p>{chre.clean_strk}</p>
        <p>{chre.photo_obj}</p>
        
      </div>
      )
    )
    : <CircularProgress/>
    }
      
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    choresList: state.choresList
  };
};

export default connect(
  mapStateToProps,
  {getChores}
)(ChoreList);
