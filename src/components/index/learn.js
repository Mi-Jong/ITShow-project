import React from 'react';

function Learn({ title, imageUrl, buttonText, onClick }) {
  return (
    <div className='learn'>
      <div className="overlay"></div>
      <img src={imageUrl} alt="Image" />
      <h2>{title}</h2>
      <button onClick={onClick}>{buttonText}</button>
    </div>
  );
}

export default Learn;
