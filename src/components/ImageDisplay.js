import React, { useState } from 'react'
import axios from 'axios'

const ImageDisplay = () => {
    
    const [values, setValues] = useState({
        imagePreviewUrl: '',
        picFile: null
    })

    let fileInput = React.createRef()

// activates user file input to set div

    const editChorePic = () => {
        fileInput.current.click()
    }
//handles the image that was input by the user

    const handleImageChange = e => {
        e.preventDefault()
        let reader = new FileReader()
        let image = e.target.files[0]
        reader.onloadend = () => {
            setValues({
                ...values,
                picFile: image,
                imagePreviewUrl: reader.result
            })
        }
        reader.readAsDataURL(image)
    }
// backend api call
    const handleSubmit = async () => {
//response stores the response back from Api
    let response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/chore/upload`,)
    console.log(response)
    .catch(err => {

        console.log(err)
        return   
        })
    }


  return (
    <div>
        <div onClick={() => editChorePic()}>
            <input
                type='file'
                accept='image/*'
                onChange={handleImageChange}
                ref={fileInput}
                />
            <img
                src={values.imagePreviewUrl}
                alt="..."
                style={{objectFit: 'cover'}}
            />
        </div>
        <button onClick={handleSubmit}>Upload Image</button>
      
    </div>
  )
}

export default ImageDisplay
