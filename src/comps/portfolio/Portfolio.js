import React, { useState } from 'react';
import './Portfolio.css'
import Upload from './upload/Upload';
import ImageGrid from './imageGrid/ImageGrid';
import ImageModal from '../utils/modal/ImageModal';

const Portfolio = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="portfolio">
      <h1 className="portfolio-title">Audsssy's Gallery</h1>
      <p className="portfolio-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Upload/>
      <ImageGrid setSelectedImg={setSelectedImg}/>
      { selectedImg && <ImageModal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }
    </div>
  );
}

export default Portfolio;