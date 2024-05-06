import React, { useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import Header from './header';
import Footer from './footer';
import '../css/index.css';

function Section() {
    return (
        <div className='section'>
            <div className='section-text'>
                <p id='h1'>GEMMI</p>
                <p id='h2'>
                    주식 투자의 첫걸음을 떼는 당신을 위한 웹사이트
                    “GEMMI”에서 주식 투자의 기초를 배우고,
                    시뮬레이션을 통해 실전 감각을 키울 수 있습니다.
                </p>
            </div>
        </div>
    );
}

const SlideShow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const videos = [
      'https://www.youtube.com/embed/LzXzHoXO5ZE?si=F7W-T3HWxi6ksW-U', 
      'https://www.youtube.com/embed/lDWGPapR-_U?si=K14DXZAjRqCDHvgS', 
      'https://www.youtube.com/embed/hI3pzjLbOzY?si=uUzBLV6cuKnAH6Uh', 
      'https://www.youtube.com/embed/9uGoJcmT9IA?si=zvrxQLgDQ2SF8VHv', 
      'https://www.youtube.com/embed/pVBZjzNBEok?si=8wrGFOAx2sYavzVU', 
      'https://www.youtube.com/embed/bE1iSUYA0KI?si=rkDnbnUrT1_I2WGt', 
      'https://www.youtube.com/embed/BIM-7wJqqu8?si=zFCJ3ZWvEEkyoAKW', 
      'https://www.youtube.com/embed/WOu6iJ_DpOg?si=bcUDw5IATF6Tpbb9', 
      'https://www.youtube.com/embed/DN_g3K2i8P4?si=-CYC1ViInaTiaIPa'
    ]; 
  
    const goToNextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };
  
    const goToPreviousSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
    };
  
    return (
      <div className="slide-show-container">
        <p></p>
        <button onClick={goToPreviousSlide}><SlArrowLeft/></button>
        <div className="video-container">
          {[currentIndex === 0 ? videos.length - 1 : currentIndex - 1, currentIndex, (currentIndex + 1) % videos.length, (currentIndex + 2) % videos.length, (currentIndex + 3) % videos.length].map((index, idx) => (
            <div key={index} className="video-wrapper" style={{ opacity: idx === 0 || idx === 4 ? 0.5 : 1 }}>
              <iframe width="400" height="200" src={videos[index]} title={`동영상 ${index + 1}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          ))}
        </div>
        <button onClick={goToNextSlide}><SlArrowRight/></button>
      </div>
    );
  };

function Index() {
    return (
        <div>
            <Header />
            <Section />
            <SlideShow />
            <Footer />
        </div>
    );
}

export default Index;
