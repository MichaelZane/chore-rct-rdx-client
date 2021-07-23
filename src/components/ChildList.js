import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import deleteChild from "../action/deleteChild";
import getChildren from "../action/getChildren";
import { CircularProgress } from "@material-ui/core";
import Child from "./Child";

const ChildList = () => {
  const dispatch = useDispatch();

  const getList = useSelector((state) => state.child.child);

  useEffect(() => {
    dispatch(getChildren());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete child")) {
      dispatch(deleteChild(id));
    }
  };

  return (
    <div className="child-card-wrap">
      {getList && getList.length > 0 ? (
        getList.map((child) => (
          <Child
            key={child.id}
            id={child.id}
            fstname={child.fstname}
            lstname={child.lstname}
            username={child.username}
            password={child.password}
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