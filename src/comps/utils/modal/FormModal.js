import React from 'react'
import './Modal.css'
import Form from '../form/Form'

const FormModal = ({ setUploadActive, uploadImg }) => {
    const handleClick =(e) => {
        // classList is used to identify className
        if (e.target.classList.contains("backdrop")) {
            setUploadActive(false);
        }
    }

    console.log(uploadImg, "create a component for image upload with progress bar here");
    return (
        <div className="backdrop" onClick={handleClick}>
            <Form />
            {/* {uploadImg && }  */}
        </div>
    )
}

export default FormModal;
