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
    const [items, setItems] = useState([
        { name: 'SN', percentageIncrease: 100, price: 100 },
        { name: 'JYB', percentageIncrease: 2000, price: 2000 },
        { name: '소노공마라탕', percentageIncrease: 150, price: 150 },
        { name: '왕카탕후루', percentageIncrease: 100, price: 100 },
        { name: '삼쉉', percentageIncrease: 2000, price: 2000 },
        { name: '네이비', percentageIncrease: 150, price: 150 }
    ]);

    const toggleNextVisibility = () => {
        setNextVisibility(prevVisibility => !prevVisibility);
    };

    const updateNewsItems = () => {
        const shuffledNews = shuffleArray(newsData);
        const selectedNews = shuffledNews.slice(0, 4);
        setNewsItems(selectedNews);
    };

    const updatePrices = () => {
        const updatedItems = items.map(item => {
            const change = 300;
            const newPrice = item.price + change;
            return { ...item, percentageIncrease: change, price: newPrice };
        });
        setItems(updatedItems);
    };

    useEffect(() => {
        updateNewsItems();
    }, []);

    return (
        <>
            <Header />
            <main>
                <Part1 seedMoney={seedMoney} toggleNext={toggleNextVisibility} items={items} />
                <Part2 seedMoney={seedMoney} isTableShown={isTableShown} setIsTableShown={setIsTableShown} newsItems={newsItems} updateNewsItems={updateNewsItems} />
                <Part3 seedMoney={seedMoney} updateNewsItems={updateNewsItems} updatePrices={updatePrices} />
            </main>
        </>
    );
}

export default App;
