import React, { useState, useEffect } from 'react';
import Header from '../header';
import Part1 from '../part1';
import Part2 from '../part2';
import Part3 from '../part3';
import newsData from './data/news.json';
import '../styles/style.css';
import '../styles/study-virtual.css';

let seedMoney = 300000;

function App() {
    const [newsItems, setNewsItems] = useState([]);
    const [isNextVisible, setNextVisibility] = useState(false);
    const [isTableShown, setIsTableShown] = useState(true);

    const toggleNextVisibility = () => {
        setNextVisibility(prevVisibility => !prevVisibility);
    };

    const updateNewsItems = () => {
        const shuffledNews = shuffleArray(newsData);
        const selectedNews = shuffledNews.slice(0, 4); // 상위 4개의 뉴스만 선택
        setNewsItems(selectedNews);
    };

    useEffect(() => {
        updateNewsItems();
    }, []);

    return (
        <>
            <Header />
            <main>
                <Part1 toggleNext={toggleNextVisibility} />
                <Part2 isTableShown={isTableShown} setIsTableShown={setIsTableShown} newsItems={newsItems} updateNewsItems={updateNewsItems} />
                <Part3 updateNewsItems={updateNewsItems} />
            </main>
        </>
    );
}

export default App;
