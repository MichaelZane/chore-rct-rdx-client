import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import getChores from '../action/getChores';
import { CircularProgress } from '@material-ui/core';

const ChoreList = (props) => {
  
  const fetchChores = props.getChores

  useEffect(() => {
    fetchChores(props.id);
  }, [fetchChores]);

  console.log(props.id)
  const chores = props.chore.chore.chore

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
    chore: state.chore
  };
};

const mapDispatchToProps = {
  getChores
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(ChoreList);
