import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { getChild } from "../slices/childSlice"

const Child = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getChild())
  }, [dispatch])

  return (
    <>
      
    </>
  )
}

export default Child
