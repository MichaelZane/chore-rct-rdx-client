import { useEffect } from "react";
import { useDispatch } from "react-redux";
/* Redux */

/* MUI */
import Checkbox from "@mui/material/Checkbox";
import { makeStyles } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { FaTimes } from "react-icons/fa";
/* Router */
import { Link, useNavigate } from "react-router-dom";
import { deleteChore } from "../../slices/choreSlice";

const useStyles = makeStyles({
  link: {
    color: "whitesmoke",
    fontSize: 12,
  },
  check: {
    textAlign: "left",
  },
});

/* ChoreList */

const ChoreList = ({ chores }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // useEffect(() => {
      
  //   console.log("refresh chores")
  // }, [])

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete chore")) {
      dispatch(deleteChore(id));
    }
    navigate("/childList")
  };

  return (
    <div className="chore-wrap">
      {chores ? (
        chores.map((chore) => (
          <li className={classes.check} key={chore.id} type="none">
            <Checkbox
              checked={false}
              color="default"
              inputProps={{ "aria-label": "checkbox with default color" }}
            />
            <strong>
              <Link className={classes.link} to={`/chore/${chore.id}`}>
                {chore.name}
              </Link>
              <Button onClick={() => handleDelete(chore.id)}>
                <FaTimes />
              </Button>
            </strong>
          </li>
        ))
      ) : (
        <span>No Chores</span>
      )}
    </div>
  );
};

export default ChoreList;
