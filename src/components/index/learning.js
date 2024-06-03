import React from 'react';
import Learn from './learn';
import studyWordImg from '../../img/index/studyWord.png';
import studyVirtualImg from '../../img/index/virtual.png';

function Learning() {
  const handleButtonClick = () => {
    // Handle button click
  };

  return (
    <div id='learn' className='container learning-container'>
      <p>주식배우기</p>
      <div className='learning'>
        <Learn
          title="Study Virtual"
          imageUrl={studyVirtualImg}
          buttonText="Click me"
          onClick={handleButtonClick}
        />
        <Learn
          title="Study Word"
          imageUrl={studyWordImg}
          buttonText="Click me"
          onClick={handleButtonClick}
        />
      </div>
    </div>
  );
}

export default Learning;
