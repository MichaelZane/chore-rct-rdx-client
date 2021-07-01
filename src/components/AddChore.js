import { useState } from "react";
import { useHistory } from "react-router-dom";
          /* Redux */
import { connect } from "react-redux"
import addChores from "../action/addChores"
          /* React bootstrap */
import { Modal, Form, Button } from "react-bootstrap";

const AddChore = (props) => {

  let childId = localStorage.getItem('childId')
  
  const history = useHistory()
  
  const [url, setUrl] = useState(null)
  const [alt, setAlt] = useState(null)
  const [ chore, setChore ] = useState({
    name: "",
    description: "",
    chore_score: null,
    child_id: childId,
    imageUrl: url

  });
  
  const handleChanges = e => {
    setChore({
      ...chore,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {

    e.preventDefault();

    const { files } = document.querySelector('input[type=file]');
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', 'chore_preset');

    const options = {
      method: 'POST',
      body: formData,
    };
    
    return fetch('https://api.Cloudinary.com/v1_1/mikezs/image/upload', options)
      .then(res => res.json())
      .then(res => {
        setUrl(res.secure_url)
        setAlt(`An image of ${res.original_filename}`)
        chore.imageUrl = url
        props.addChores(chore)
        reset()
        history.push("/home")
        
      })
      .catch(err => console.error(err))
  
  }

  const reset = () => {
    return setChore({
      name: "",
      description: "",
      chore_score: null,
      child_id: null,
      imageUrl: ""
    })
  }


  
  return (

    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Chores
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form onSubmit={handleSubmit} >       
      <Form.Group>
            <Form.File
              className="position-relative"
              required
              name="file"
              label="Upload Image"
              onChange={handleChanges}
              value={chore.imageUrl}
            />
          </Form.Group>
        <p>
          {url && (
            <img src={url} alt={alt} />
          )}
        </p>
        <Form.Group controlId="formGroupName">
        <Form.Label>Add Chore Name</Form.Label>
        <Form.Control type="text" placeholder="Chore Name" onChange={handleChanges} value={chore.name}
        /> 
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Description" onChange={handleChanges} value={chore.description}
        />
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" placeholder="Chore Score" onChange={handleChanges} value={chore.chore_score}
          />
        </Form.Group>
        <Button
          type='submit'
          fullwidth='true'
          variant='contained'
          color='primary'
          >
            Add Chore
          </Button>
          <Button
            type='button'
            fullwidth='true'
            variant='contained'
            color='primary'
            onClick={() => props.history.push('/home')}
          >
            Cancel
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>

  );
}

export default connect(
  null,
  { addChores }
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

*/