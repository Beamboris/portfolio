import React from 'react';
import './downloadsection.css'

const DownloadSection = () => {
  return (
    <div className='download section'>
      <h2>Download my cv</h2>
      <div className='download-buttons-container'>
      <button className='download-buttons'>English version</button>
      <button className='download-buttons'>German version</button>
      </div>
    </div>
  )
}

export default DownloadSection
