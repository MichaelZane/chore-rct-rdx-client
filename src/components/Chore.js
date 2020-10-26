import React from 'react';



function Chore(props) {
  return <div>

    <p>Name: {props.name}</p>
    <p>Description: {props.description}</p>
    <p>{props.photo_obj}</p>
    <p>Comments: {props.comments}</p>
    <p>Completed: {props.completed}</p>
    <p>Score: {props.chore_score}</p>
    <p>Bonus: {props.bonus_pts}</p>
    <p>Streak: {props.clean_strk}</p> 

  </div>;
}

export default Chore;
