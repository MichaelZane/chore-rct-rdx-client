import React, { useState } from 'react';
import axios from 'axios'
import UploadingImage from './UploadingImage';




const Upload = props => {

    const [selectedFile, setSelectedFile] = useState([]);
    
// handles preview of image in div
const fileSelectedHandler = event => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
}

// start of image upload

    const fileUploadHandler = () => {
            //form data being sent  
        const frmdata = new FormData();
            frmdata.append('ItemBox', selectedFile, selectedFile.name);
        axios
        .post(`process.env.REACT_APP_BACKEND_URL/api/chore/${props.url}`, frmdata, url, {
            onUploadProgress: progressEvent => {
            console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')}
            })
        .then(res => {
            console.log(res);
           
            });
      
           
            }
    
    return (
        <div>
            <div>
                    <button
                    onClick={fileUploadHandler && <UploadingImage url={url}/>}            
                    >Add Item</button>

                    <div>

                    <input className='choose-file'      
                    type='file'          
                    onChange={fileSelectedHandler}
                    />                                    
                    </div>
                </div>
                    <div>
                    <img src={selectedFile} alt='item'/>
                    </div>
        </div>
    )
}
 
export default Upload;