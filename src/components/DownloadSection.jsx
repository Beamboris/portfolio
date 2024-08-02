import React from 'react';
import './downloadSection.css'

const DownloadSection = () => {
  const host = window.location.origin
  console.log(host)
  const englishVersion = `${host}/Boris_english.pdf`
  const germanVersion = `${host}/Boris_deutsch.pdf`


  const downloadFileAtUrl = (URL) => {
    const fileName = URL.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href= URL;
    aTag.setAttribute('download',fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <div className='download section'>
      <h2>Download my cv</h2>
      <div className='download-buttons-container'>
      <button onClick={() => downloadFileAtUrl(englishVersion)} className='download-buttons'>English version</button>
      <button onClick={() => downloadFileAtUrl(germanVersion)} className='download-buttons'>German version</button>
      </div>
    </div>
  )
}

export default DownloadSection
