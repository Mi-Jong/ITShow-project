import React from 'react';
import studyGameImg from '../../img/studyGame.png'
import { Link } from 'react-router-dom';

function Section() {
    return (
        <div className='ban'>
            <div className='ban__inner'>
                <div className='ban-text'>
                    <p id='h3'>글씨</p>
                    <p id='h1'>쉽게 익히는 주식단어</p>
                    <p id='h2'>글씨글씨글씨글씨글씨글씨글씨글씨글씨글씨글씨글씨글씨</p>
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
