import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import ChildCard from "./ChildCard";
import { selectChildrenAndChores, fetchChildAndChores, selectLoading, selectError, deleteChild } from '../../slices/childSlice'

const ChildList = () => {
  const dispatch = useDispatch();

  const children = useSelector(selectChildrenAndChores);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError)

  const usrId = localStorage.getItem("userId")

  useEffect(() => {

    dispatch(fetchChildAndChores(usrId));
    
  }, [ dispatch, usrId ]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete child")) {
      dispatch(deleteChild(id));
    }
  };

  return (
    <div className="child-card-wrap">
      {children.length > 0 ? (
        children.map((child) => (
          <ChildCard
            key={child.id}
            childId={child.id}
            fstname={child.fstname}
            lstname={child.lstname}
            username={child.username}
            parentId={child.parent_id}
            chores={child.chores}
            handleDelete={handleDelete}
          />
        ))
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};
export default ChildList;