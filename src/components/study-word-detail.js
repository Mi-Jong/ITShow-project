import React, { useState, useEffect } from 'react';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import '../css/style.css';
import styles from '../css/study-word-detail.module.css';
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
        setKnownWords((prevKnownWords) => [...prevKnownWords, currentIndex]);
        setCards((prevCards) => {
            const remainingCards = prevCards.filter((_, index) => index !== currentIndex);
            const newCurrentIndex = currentIndex < remainingCards.length ? currentIndex : 0;
            setCurrentIndex(newCurrentIndex);
            return remainingCards;
        });
        setIsMeaningVisible(false);
    };

    const currentCard = cards[currentIndex];

    return (
        <>
            <Header/>
            <section id='studyGameDetail' className={styles['studyGameDetail']}>  
                <div className={styles['studyGameDetail_inn']}>
                    <div className={styles['StudyGameDetail__inner']}>
                        {cards.length === 0 ? (
                            <p className={styles['study_completed']}>학습을 다 하셨습니다.</p>
                        ) : (
                            <>
                                <p className={styles['round']}><span className={styles['roundWord']}>{currentIndex + 1}</span> / {cards.length}</p>
                                <div className={styles['card_inner']}>
                                    <p onClick={handlePrev}><BsChevronLeft size="40" /></p>
                                    <div className={styles['card']}>
                                    <div className={styles['card_word']}>{currentCard?.title}</div>
                                        {isMeaningVisible ? <div className={styles['card_word_exp']} ><span className={styles['cardContent']} >{currentCard?.content}</span></div> : <div className={styles['card_word_exp']}></div>}
                                    </div>
                                    <p onClick={handleNext}><BsChevronRight size="40" /></p>
                                </div>
                                <div className={styles['card_inner']}>
                                    {!isMeaningVisible && <button className={styles['knowButton']} onClick={() => setIsMeaningVisible(true)}>의미보기</button>}
                                    {isMeaningVisible && <button className={styles['nextButton']}  onClick={handleKnow}>이제 알아요</button>}
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
