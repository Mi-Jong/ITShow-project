import React, { useState, useEffect } from 'react';
import Header from '../commonHeader';
import Part1 from './part1';
import Part2 from './part2';
import Part3 from './part3';
import SellAndBuy from '../SellAndBuy';
import newsData from '../../Data/news.json';
import '../../css/style.css';
import '../../css/study-virtual.css';
import { Column } from 'react-virtualized';

let handle = "";

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function App() {
    const [seedMoney, setseedMoney] = useState(300000);
    const [newsItems, setNewsItems] = useState([]);
    const [isNextVisible, setNextVisibility] = useState(false);
    const [isTableShown, setIsTableShown] = useState(true);
    const [items, setItems] = useState([
        { id: 0, name: 'SN', quantity: 0, price: 10100, purchasePrice: 0, currentPrice: 0 },
        { id: 1, name: 'JYB', quantity: 0, price: 200000, purchasePrice: 0, currentPrice: 0 },
        { id: 2, name: '소노공마라탕', quantity: 0, price: 1500000, purchasePrice: 0, currentPrice: 0 },
        { id: 3, name: '왕카탕후루', quantity: 0, price: 10000, purchasePrice: 0, currentPrice: 0 },
        { id: 4, name: '삼쉉', quantity: 0, price: 2000, purchasePrice: 0, currentPrice: 0 },
        { id: 5, name: '네이비', quantity: 0, price: 15000, purchasePrice: 0, currentPrice: 0 }
    ]);
    const [selectedItem, setSelectedItem] = useState(null);

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
            const change = -300;
            const newPrice = item.price + change;
            return { ...item, percentageIncrease: change, price: newPrice, currentPrice: item.currentPrice };
        });
        setItems(updatedItems);
    };

    const handleBuy = () => {
        if (selectedItem) {
            handle = "매수";
            console.log("매수 버튼 클릭 - 선택된 항목:", selectedItem);
            const updatedItems = items.map(item => {
                if (item.name === selectedItem.name) {
                    const updatedQuantity = item.quantity + 1;
                    const updatedPurchasePrice = updatedQuantity * item.price;
                    return { ...item, quantity: updatedQuantity, purchasePrice: updatedPurchasePrice };
                }
                return item;
            });
            setItems(updatedItems);
            setNextVisibility(true);
        } else {
            console.log("매수 버튼 클릭 - 아무 항목도 선택되지 않았습니다.");
        }
    };

    const handleSell = () => {
        if (selectedItem && selectedItem.quantity > 0) {
            handle = "매도";
            console.log("매도 버튼 클릭 - 선택된 항목:", selectedItem);
            const updatedItems = items.map(item => {
                if (item.name === selectedItem.name) {
                    const updatedQuantity = item.quantity - 1;
                    const updatedPurchasePrice = updatedQuantity * item.price;
                    return { ...item, quantity: updatedQuantity, purchasePrice: updatedPurchasePrice };
                }
                return item;
            });
            setItems(updatedItems);
            setNextVisibility(true);
        } else {
            console.log("매도 버튼 클릭 - 아무 항목도 선택되지 않았거나 보유량이 없습니다.");
        }
    };

    const selectItem = (item) => {
        setSelectedItem(item);
    };

    const handleClose = () => {
        setNextVisibility(false);
    };

    useEffect(() => {
        updateNewsItems();
    }, []);

    return (
        <div>
            <Header />
            <main>
                <Part1 seedMoney={seedMoney} setSeedMoney={setseedMoney} toggleNext={toggleNextVisibility} items={items} handleBuy={handleBuy} handleSell={handleSell} selectItem={selectItem} />
                <Part2 seedMoney={seedMoney} setSeedMoney={setseedMoney} isTableShown={isTableShown} setIsTableShown={setIsTableShown} newsItems={newsItems} updateNewsItems={updateNewsItems} items={items} selectItem={selectItem} />
                <Part3 updateNewsItems={updateNewsItems} updatePrices={updatePrices} />
                {selectedItem && isNextVisible && <SellAndBuy name={selectedItem.name} price={selectedItem.price} quantity={selectedItem.quantity} currentPrice={selectedItem.currentPrice} purchasePrice={selectedItem.purchasePrice} handle={handle} handleClose={handleClose} selectItem={selectItem} />}
            </main>
        </div>
    );
}

export default App;
