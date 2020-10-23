import React, { useState } from "react";

          /* Redux */
import { connect } from "react-redux"
import addChores from "../action/addChores"

          /* MUI */
import { 
  Button, 
  TextField, 
  Typography 
} from '@material-ui/core';

          /* AddChore */

export function AddChore( props ) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    chore_score: 0,
    child_id: localStorage.getItem("childId"),

  });

  const handleChanges = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addChores(formData, props.history)
  };

  return (
    <form
      className="align-self-center mt-5"
      id="resetthis"
      onSubmit={handleSubmit}
    >
      <div>
        <TextField
          type="text"
          className="form-control"
          onChange={handleChanges}
          placeholder="Add Chore Name..."
          name="name"
          required
        />
        <input
          type="text"
          className="form-control mt-3"
          onChange={handleChanges}
          placeholder="Add Chore Description..."
          name="description"
          required
        />
        {/* <input type="text" className="form-control mt-3" onChange={handleChanges} placeholder="Add Chore Chore Score..." name="chore_score" required /> */}
        <Button className="w-100 btn btn-primary mt-3" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
}

export default connect(
  null,
  {addChores}
)(AddChore);

/* 
  name	Required
description	Required
Comments	
Completed	
due_date	
chore_score	Required
bonus_pts	
clean_strk	
photo_obj	
child_id	Required
parent_id
*/