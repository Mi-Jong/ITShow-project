import React, { useState, useEffect } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import Header from './header';
import Footer from './footer';
import videoData from '../Data/videos.json'; // Importing video data from JSON
import '../css/index.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import bannerImg from "../img/bannerImg.png";
import studyWordImg from '../img/studyWord.png';

function Banner() {
  return (
    <div className="section">
      <div className="lb-image">
        <img src={bannerImg} alt="Banner" />
        <div className="section-text">
          <p className="heading1">GEMMI</p>
          <p className="heading2">
            주식 투자의 첫걸음을 떼는 당신을 위한 웹사이트
            “GEMMI”에서 주식 투자의 기초를 배우고,
            시뮬레이션을 통해 실전 감각을 키울 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
function Learn({ title, imageUrl, buttonText, onClick, linkTo }) {
  return (
    <div id='learn' className='learn'>
      <div class="overlay"></div>
      <img src={imageUrl} alt="Image" />
      <h2>{title}</h2>
      <button onClick={onClick}>
        <Link to={linkTo}>{buttonText}</Link>
      </button>
    </div>
  );
};

function Learning() {
  
  return (
    <div  className='container learning-container'>
      <p>주식배우기</p>
      <div className='learning'>
        <div className='learning__inner'>
          <Learn
            title="주식 시뮬레이션"
            imageUrl="https://example.com/image.jpg"
            buttonText="Click me"
            linkTo="/StudyVirtual"
          />
          <div className='learning_text'>
            실전 감각을 키우기 위한 주식 시뮬레이션. 뉴스를 확인하여
            수익률을 높여보세요. 전체 결과와 랭킹을 확인할 수 있습니다. 
          </div>   
        </div>
        <div className='learning__inner'>
          <Learn
            title="주식 단어"
            imageUrl= {studyWordImg}
            buttonText="Click me"
            linkTo="/StudyWord"
          />
          <div className='learning_text'>
          쉽게 익히는 주식 단어 게임. 암기 학습과 퀴즈로 주식 용어를
          더욱 자세히 배울 수 있습니다.
          </div>   
        </div>
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
    <div id="relate" className="container slide-show-container ">
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

const StockApp = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/data');
        setData(response.data.stocks);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return ( 
    <div id='popular' className='container stockTable-container'>
      <p>인기종목</p>
      <div className='stockPopularTable'>
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
          {data.map((stock, index) => (
            <tr key={stock.itemCode}>
              <td>{index + 1}</td>
              <td>{stock.stockName}</td>
              <td>{stock.itemCode}</td>
              <td>{stock.fluctuationsRatio}%</td>
              <td>{stock.closePrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className='main'>
      <Header />
      <Banner />
      <Learning />
      <SlideShow />
      <StockApp />
      <Footer />
    </div>
  );
}

export default Index;
