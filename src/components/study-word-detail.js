import React, { useState, useEffect } from 'react';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import '../css/style.css';
import '../css/study-word-detail.css';
import wordData from '../Data/word.json';
import Header from './commonHeader';

function StudyWordDetail() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [knownWords, setKnownWords] = useState([]);
    const [cards, setCards] = useState([]);
    const [isMeaningVisible, setIsMeaningVisible] = useState(false);

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
        setIsMeaningVisible(false);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < cards.length - 1 ? prevIndex + 1 : 0));
        setIsMeaningVisible(false);
    };

    const handleKnow = () => {
        setKnownWords((prevKnownWords) => {
            const newKnownWords = [...prevKnownWords, currentIndex];
            return newKnownWords;
        });
        setCards((prevCards) => {
            const remainingCards = prevCards.filter((_, index) => index !== currentIndex);
            setCurrentIndex(currentIndex < remainingCards.length ? currentIndex : 0);
            return remainingCards;
        });
    };

    const handleNextLater = () => {
        handleNext();
        setIsMeaningVisible(false);
    };

    const currentCard = cards[currentIndex];

    return (
        <>
            <Header/>
            <section id='studyGameDetail'>  
                <div class='studyGameDetail'>
                    <div className='StudyGameDetail__inner'>
                        {cards.length === 0 ? (
                            <p className='study_completed'>학습을 다 하셨습니다.</p>
                        ) : (
                            <>
                                <p className='round'><span className='roundWord'>{currentIndex + 1}</span> / {cards.length}</p>
                                <div className='card_inner'>
                                    <p onClick={handlePrev}><BsChevronLeft size="40" /></p>
                                    <div className='card'>
                                        <div className='card_word'>{currentCard.title}</div>
                                        {isMeaningVisible ? <div className='card_word_exp'><span className='cardContent'>{currentCard.content}</span></div> : <div className='card_word_exp'></div>}
                                    </div>
                                    <p onClick={handleNext}><BsChevronRight size="40" /></p>
                                </div>
                                <div className='card_inner'>
                                    {!isMeaningVisible && <button className='knowButton' onClick={() => setIsMeaningVisible(true)}>의미보기</button>}
                                    {isMeaningVisible && <button className='knowButton' onClick={handleKnow}>이제 알아요</button>}
                                    {isMeaningVisible && <button className='nextButton' onClick={handleNextLater}>다음에 할게요</button>}
                                </div>
                            </>
                        )}
                       
                    </div>
                </div>
            </section>
        </>
    );
}

export default StudyWordDetail;
