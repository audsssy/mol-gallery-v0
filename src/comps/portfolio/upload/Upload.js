import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import './Upload.css'
import FormModal from '../../utils/modal/FormModal';


const Upload = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const [uploadActive, setUploadActive] = useState(false);
    const [uploadImg, toggleUploadImg] = useState(true);

    const types = ['image/png', 'image/jpeg'];

    const handleClick = (e) => {
        setUploadActive(true);
    }

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        

        // check if a file is selected and is an accepted type
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError(null);
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }
    }
    
    return (
        <div>
            <div className="form-modal">
                <button className="form-modal-button" type="button" onClick={handleClick}>+</button>
                { uploadActive && <FormModal setUploadActive={setUploadActive} uploadImg={uploadImg}/> }
            </div>




            {/* need to create a component for uploading image files */}
            <form className="upload">
                <label>
                    <input type="file" onChange={changeHandler}/>
                    <span>+</span>
                </label>
                
                <div className="output">
                    { error && <div className="error">{ error }</div> }
                    { file && <div>{ file.name }</div> }
                    { file && <ProgressBar file={file} setFile={setFile}/> }
                    
                </div>
            </form>
        </div>
    )
}

export default Upload;
