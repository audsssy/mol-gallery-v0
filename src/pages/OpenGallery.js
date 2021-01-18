import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import './OpenGallery.css'

const OpenGallery = () => {
    const [value, setValue] = useState(null);

    return (
        <div className="from-in-uploadnft">
            <h1 className="open-gallery-title">Open a Gallery</h1>
            <p>Describe the steps to opening an NFT!</p>

            <div>  
                <label>Name of Gallery</label>
                <br/>
                <input type="text"/>
            </div>

            <div>
                <label>Description</label>
                <br/>
                <input type="text"/>
            </div>

            <div>
                <label>ERC721 Token Name</label>
                <br/>
                <input type="text"/>
            </div>

            <div>
                <label>ERC721 Token Symbol</label>
                <br/>
                <input type="text"/>
            </div>

            <div >
                <p>Describe flat royalties vs decaying roayaltie</p>
                <label>Flat Royalties</label>
                <label>Decaying Royalties</label>
                <br/>
                <input type="radio" name="royalties" value="flat"/>
                <input type="radio" name="royalties" value="decaying"/>
            </div>            

            <div>
                <label >Royalties</label>
                <br/>
                <input type="text"/>
            </div>

            <div >
                <Link to='/gallery'>
                    <button >Submit</button>
                </Link>
            </div>
        </div>
    )
}

export default OpenGallery
