import React from 'react';
import studyGameImg from '../../img/index/studyGame.png'
import { Link } from 'react-router-dom';

function Section() {
    return (
        <div className='ban'>
            <div className='ban__inner'>
                <div className='ban-text'>
                    <p id='h3'>주식배우기</p>
                    <p id='h1'>쉽게 익히는 주식단어</p>
                    <p id='h2'>암기 학습과 단어 게임으로 주식 용어를 더욱 자세히 배울 수 있습니다</p>
                </div>
                <div className='ban-img'>
                    <img src= {studyGameImg}></img>
                    <button><Link to="/StudyGame">단어 게임 하러가기</Link></button>
                </div>
            </div> 
        </div>
    );
}

export default Section;
