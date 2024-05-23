import React, { useState, useEffect } from 'react';
import Header from '../header';
import Part1 from './part1';
import Part2 from './part2';
import Part3 from './part3';
import newsData from '../../Data/news.json';
import '../../css/style.css';
import '../../css/study-virtual.css';

let seedMoney = 300000;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function App() {
    const [newsItems, setNewsItems] = useState([]);
    const [isNextVisible, setNextVisibility] = useState(false);
    const [isTableShown, setIsTableShown] = useState(true);

    const toggleNextVisibility = () => {
        setNextVisibility(prevVisibility => !prevVisibility);
    };

    const updateNewsItems = () => {
        const shuffledNews = shuffleArray(newsData);
        const selectedNews = shuffledNews.slice(0, 4);
        setNewsItems(selectedNews);
    };

    useEffect(() => {
        updateNewsItems();
    }, []);

    return (
        <>
            <Header />
            <main>
                <Part1 seedMoney={seedMoney} toggleNext={toggleNextVisibility} />
                <Part2 seedMoney={seedMoney} isTableShown={isTableShown} setIsTableShown={setIsTableShown} newsItems={newsItems} updateNewsItems={updateNewsItems} />
                <Part3 seedMoney={seedMoney} updateNewsItems={updateNewsItems} />
            </main>
        </>
    );
}

export default App;
