import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

export default function Form() {

  const dispatch = useDispatch()

  const { id } = useParams

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    chore_score: "",
    child_id: "",
    parent_id: ""
  });

  const handleChanges = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if(formData)
    dispatch();
  };

  return (
    <form className='align-self-center mt-5' id='resetthis' onSubmit={handleSubmit}>
      <div>
        <input
          type='text'
          className='form-control'
          onChange={handleChanges}
          placeholder='Update Name...'
          name='name'
          required
        />
        <input
          type='text'
          className='form-control mt-3'
          onChange={handleChanges}
          placeholder='Update Description...'
          name='description'
          required
        />
        {/* <input type="text" className="form-control mt-3" onChange={handleChanges} placeholder="Update Chore Score..." name="chore_score" required /> */}
        <button className='w-100 btn btn-primary mt-3' type='submit'>
          Submit
        </button>
      </div>
    </form>
  );
}
