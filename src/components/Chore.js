import React from 'react';
import { useSelector } from "react-redux"


      /* MUI */
import Card from '@material-ui/core/Card';
import { ChildChores } from './ChildChores';
import { Link } from '@material-ui/core';


export const Chore = ({ match}) => {

  const { choreId } = match.params

  const chore = useSelector(state => state.chores.find(chore => chore.id === choreId))

  if(!chore) {
    return (
      <span>Chore Not Found!</span>
    )
  }

return (
  <div>
    <strong>{chore.name}</strong>
    <div>
      <ChildChores childId={chore.child}/>
    </div>
    <Link 
      to={`/editchore/${chore.id}`} 
      className="btn">Edit</Link>
  </div>

)


}