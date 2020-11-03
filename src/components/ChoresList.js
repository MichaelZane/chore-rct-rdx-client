import React from 'react'
import { useSelector } from 'react-redux'
import { ChildChores } from "./ChildChores"

export const ChoresList = () => {

    const chores = useSelector(state => state.chores)

    const renderChores = chores.map(chore => (
        <div>
            <strong>{chore.name}</strong>
            <div>
                <ChildChores childId={chore.child} />
            </div>
        </div>
        
    ))
  return (
    <div>

        {renderChores}
      
    </div>
  )
}


