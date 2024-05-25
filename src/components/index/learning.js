import React from 'react';
import Learn from './learn';
import studyWordImg from '../../img/studyWord.png'

function Learning() {
  const handleButtonClick = () => {
    // Handle button click
  };

  return (
    <div id='learn' className='container learning-container'>
      <p>주식배우기</p>
      <div className='learning'>
        <Learn
          title="Example Title"
          imageUrl="https://example.com/image.jpg"
          buttonText="Click me"
          onClick={handleButtonClick}
        />
        <Learn
          title="Example Title"
          imageUrl= {studyWordImg}
          buttonText="Click me"
          onClick={handleButtonClick}
        />
      </div>
    </div>
  );
}

export default Learning;
