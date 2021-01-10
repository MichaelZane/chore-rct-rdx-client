import React, {useState} from 'react'
import S3FileUpload from 'react-s3'

const UploadingImage = () => {

    const config = {
    accesId:    process.env.REACT_APP_ACCESS_ID,
    accessKey:    process.env.REACT_APP_ACCESS_KEY,
    bucketName:    process.env.REACT_APP_BUCKET_NAME,
    region:    process.env.REACT_APP_REGION
    }

    const [url, setUrl] = useState('')

    const uploading = (e) => {
        S3FileUpload.uploadFile(e.target.files[0], config)

        .then(data => 
            console.log(data.location),
            setUrl(data.location)
        )
        .catch( err => console.log(err))
    } 
    console.log(url)
  return (
    <button onClick={uploading}>
      Upload Image
    </button>
  )
}

export default UploadingImage
