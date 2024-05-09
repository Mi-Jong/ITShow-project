import React, { useState, useEffect } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import Header from './header';
import Footer from './footer';
import videoData from '../Data/videos.json'; // Importing video data from JSON
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

function Learn({ title, imageUrl, buttonText, onClick }) {
  return (
    <div className='learn'>
      <div class="overlay"></div>
      <img src={imageUrl} alt="Image" />
      <h2>{title}</h2>
      <button onClick={onClick}>{buttonText}</button>
    </div>
  );
};

function Learning() {
  const handleButtonClick = () => {
    // Handle button click logic
  };
  return (
    <div className='container learning-container'>
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
          imageUrl="https://example.com/image.jpg"
          buttonText="Click me"
          onClick={handleButtonClick}
        />
      </div>
    </div>
  );
}

function SlideShow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videos = videoData.map(video => video.url); // Extracting URLs from JSON

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  return (
    <div className="container slide-show-container ">
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
};

// 백엔드(라우터)기능을 만들고 다시 하기
const StockApp = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch('https://m.stock.naver.com/api/stocks/searchTop/all?page=1&pageSize=20') // Node.js 서버의 라우트
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setStocks(data.stocks);
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
      });
  }, []);

  return (
    <div>
      {/* <h1>주식 정보</h1>
      <table>
        <thead>
          <tr>
            <th>순위</th>
            <th>종목명</th>
            <th>종목코드</th>
            <th>등락률</th>
            <th>현재가</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{stock.stockName}</td>
              <td>{stock.itemCode}</td>
              <td>{stock.fluctuationsRatio}%</td>
              <td>{stock.closePrice}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}
function Index() {
  return (
    <div className='main'>
      <Header />
      <Section />
      <Learning />
      <SlideShow />
      <StockApp />
      <Footer />
    </div>
  );
}

export default Index;
