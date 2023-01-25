import React from "react";
import { useDispatch } from "react-redux";
/* MUI */
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { FaTimes } from "react-icons/fa";
/* Router */
import { Link, useNavigate } from "react-router-dom";
import { deleteChore } from "../../slices/choreSlice";

const ChoreList = ({ chores }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete chore")) {
      dispatch(deleteChore(id));
    }
    navigate("/childList");
  };

  return (
    <div >
      {chores ? (
        chores.map((chore) => (
          <li
            sx={{
              textAlign: "left",
            }}
            key={chore.id}
            type="none"
          >
            <Checkbox
              checked={false}
              color="default"
              inputProps={{ "aria-label": "checkbox with default color" }}
            />
            <Button
              color="error"
              onClick={() => handleDelete(chore.id)}
              >
                <FaTimes />
              </Button>
            <strong>
              <Link
                sx={{
                  color: "whitesmoke",
                  fontSize: 12,
                }}
                to={`/chore/${chore.id}`}
              >
                {chore.name}
              </Link>
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
