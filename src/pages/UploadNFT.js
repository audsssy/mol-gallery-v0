import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import ProgressBar from '../comps/ProgressBar'
import ImageUpload from '../comps/ImageUpload'
import './UploadNFT.css'

const UploadNFT = () => {    
    const [file, setFile] = useState(null)
    const history = useHistory();

    const getFileForUpload = (file) => {
        console.log("child data - " + file);
        setFile(file);
    }


    const handleClick = (e) => {

        
        history.push('/');
    }

    return (
        <div className="from-in-uploadnft">
            <h1 className="upload-nft-title">Upload NFT</h1>
            <p>Describe the steps to uploading an NFT!</p>

            <div>  
                <label>Title</label>
                <br/>
                <input type="text"/>
            </div>

            <div>
                <label>Description</label>
                <br/>
                <input type="text"/>
            </div>

            <ImageUpload getFileForUpload={getFileForUpload}/>

        {/* Need to move ProgressBar to a modal so that file is uploaded after submit button onClick*/}
            {file && <ProgressBar file={file} setFile={setFile}/>} 

            <div>
                <label>Royalties</label>
                <br/>
                <input type="text"/>
            </div>

                <div >
                    <button onClick={handleClick}>Submit</button>
                </div>
        </div>
    )
}

export default UploadNFT
