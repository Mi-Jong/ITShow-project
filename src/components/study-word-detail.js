import React, { useState, useEffect } from 'react';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import '../css/style.css';
import '../css/study-word-detail.css';
import wordData from '../Data/word.json';

function StudyWordDetail() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [knownWords, setKnownWords] = useState([]);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const title = localStorage.getItem('memorizedTitle');
        if (title) {
            const titleObj = wordData.find(t => t.title === title);
            if (titleObj) {
                setCards(titleObj.cards);
            } else {
                setCards([]);
            }
        }
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : cards.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < cards.length - 1 ? prevIndex + 1 : 0));
    };

    const handleKnow = () => {
        setKnownWords([...knownWords, currentIndex]);
        handleNext();
    };

    const handleNextLater = () => {
        handleNext();
    };

    if (cards.length === 0) {
        return <div>선택한 제목에 대한 카드를 찾을 수 없습니다.</div>;
    }

    const currentCard = cards[currentIndex];

    return (
        <section id='studyGameDetail'>  
            <div class='studyGameDetail'>
                <div className='StudyGameDetail__inner'>
                    <p className='round'><span className='roundWord'>{currentIndex + 1}</span> / {cards.length}</p>
                    <div className='card_inner'>
                        <p onClick={handlePrev}><BsChevronLeft size="40" /></p>
                        <div className='card'>
                            <div className='card_word'>{currentCard.title}</div>
                            <div className='card_word_exp'>{currentCard.content}</div>
                        </div>
                        <p onClick={handleNext}><BsChevronRight size="40" /></p>
                    </div>
                    <div className='card_inner'>
                        <button className='knowButton' onClick={handleKnow}>이제 알아요</button>
                        <button className='nextButton' onClick={handleNextLater}>다음에 할게요</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StudyWordDetail;
