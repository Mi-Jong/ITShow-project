import React, { useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import videoData from '../Data/videos.json';
import '../css/index.css';

function SlideShow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videos = videoData.map(video => video.url);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  return (
    <div id="relate" className="container slide-show-container">
      <p>관련 유튜브</p>
      <button onClick={goToPreviousSlide}><SlArrowLeft /></button>
      <div className="video-container">
        {[currentIndex === 0 ? videos.length - 1 : currentIndex - 1, currentIndex, (currentIndex + 1) % videos.length, (currentIndex + 2) % videos.length, (currentIndex + 3) % videos.length].map((index, idx) => (
          <div key={index} className="video-wrapper" style={{ opacity: idx === 0 || idx === 4 ? 0.5 : 1 }}>
            <iframe width="400" height="200" src={videos[index]} title={`동영상 ${index + 1}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        ))}
      </div>
      <button onClick={goToNextSlide}><SlArrowRight /></button>
    </div>
  );
}

export default SlideShow;
