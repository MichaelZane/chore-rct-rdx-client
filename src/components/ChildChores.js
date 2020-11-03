import React from 'react'
import { useSelector } from 'react-redux'

export const ChildChores = ({ childId }) => {

    const child = useSelector(state => state.child.find(
        child => child.id === childId))
        
  return <span>assigned to {child ? child.name : "Child doesn't exist"} </span>
    
}


