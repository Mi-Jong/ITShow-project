import React from 'react'
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import '../css/style.css';
import '../css/study-word-detail.css';

function StudyWordDetail() {
  return (
    <section id='studyGameDetail'>
        <div className='StudyGameDetail__inner'>
            <p className='round'><span className='roundWord'>1</span> / 10</p>
            <div className='card_inner'>
                <p><BsChevronLeft size="40"/></p>
                <div className='card'>
                    <div className='card_word'>ㅇ</div>
                    <div className='card_word_exp'>ㅇ</div>
                </div>
                <p><BsChevronRight size="40"/></p>
            </div>
            <div className='card_inner'>
            <button className='knowButton'>이제 알아요</button>
            <button className='nextButton'>다음에 할게요</button>
            </div>
        </div>
     </section>
  )
}

export default StudyWordDetail;