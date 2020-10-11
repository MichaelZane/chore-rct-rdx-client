import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    chore_score: 0,
    child_id: 0,
    parent_id: 0
  });

  const handleChanges = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form
      className="align-self-center mt-5"
      id="resetthis"
      onSubmit={handleSubmit}
    >
      <div>
        <input
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
        <button className="w-100 btn btn-primary mt-3" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
