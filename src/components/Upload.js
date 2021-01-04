import React, { useRef } from 'react';
import S3 from "react-aws-s3";


const Upload = () => {
    const fileInput = useRef()
    // const[image, setImage] = useState()
    // const[progress, setProgress] = useState(0)


    // const handleChange = e => {
    //     if(e.target.files[0]) {
    //         const image = e.target.files[0]
    //         setImage(image)
    //     }
    // }

    // const handleUpload = e => {
    //     const uploadTask = storage.ref(`images/${image.name}`).put(image)
    //     uploadTask.on('state_changed', 
    //     (snapshot) => {
            //progress function
    //         const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
    //         setProgress(progress)
    //     }, (error) => {
    //         //error function
    //         console.log(error)
    //     }, () => {
    //         //completed function
    //         storage.ref('images').child(image.name).getDownloadURL()
    //         .then(url => {
    //             console.log(url)
    //             setImage(url)
    //         })
    //     })
    // }
    // console.log(image)

    const handleClick = e => {
        e.preventDefault()
        let file = fileInput.current.files[0]
        let newFileName = fileInput.current[0].name.replace(/\..+$/, "")
        const config = {
            bucketName: process.env.REACT_APP_BUCKET_NAME,
            accessKeyId: process.env.REACT_APP_ACCESS_ID,
            secretAccessKey: process.env.REACT_APP_ACCESS_KEY,
            region: process.env.REACT_APP_REGION,
        }
        const ReactS3Client = new S3(config)
        ReactS3Client.uploadFile(file, newFileName)
            .then(data => {
                console.log(data)
                if(data.status === 204) { 
                    console.log("success")
                } else {
                    console.log("error")
                }
            })
    }

    return ( 
        <div className="image-wrap" onSubmit={handleClick}>
            
            <br/>
                <input 
                className="image" 
                type="file"
                ref={fileInput}
                />
                <button className='btn'>Upload</button>
                <br/>
                <img className="image-container" src='http://via.placeholder.com/450x450' alt="uploaded"/>
        </div>
     );
}
 
export default Upload;