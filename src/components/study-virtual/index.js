import React, { useState, useEffect } from 'react';
import Header from '../commonHeader';
import Part1 from './part1';
import Part2 from './part2';
import Part3 from './part3';
import SellAndBuy from '../SellAndBuy';
import VirtualThisResult from '../virtual-thisResult';
import { newsData } from '../../Data/news.js';
import '../../css/style.css';
import '../../css/study-virtual.css';

let handle = "";

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function App() {
    const seedMoney = 300000;
    const [money, setMoney] = useState(seedMoney);
    const [newsItems, setNewsItems] = useState([]);
    const [isNextVisible, setNextVisibility] = useState(false);
    const [isTableShown, setIsTableShown] = useState(true);
    const [items, setItems] = useState([
        { id: 0, name: 'SN', quantity: 0, price: 10100, purchasePrice: 0, currentPrice: 10100, count: 0 },
        { id: 1, name: 'JYB', quantity: 0, price: 200000, purchasePrice: 0, currentPrice: 200000, count: 0 },
        { id: 2, name: '소노공마라탕', quantity: 0, price: 1500000, purchasePrice: 0, currentPrice: 1500000, count: 0 },
        { id: 3, name: '왕카탕후루', quantity: 0, price: 10000, purchasePrice: 0, currentPrice: 10000, count: 0 },
        { id: 4, name: '삼쉉', quantity: 0, price: 2000, purchasePrice: 0, currentPrice: 2000, count: 0 },
        { id: 5, name: '네이비', quantity: 0, price: 15000, purchasePrice: 0, currentPrice: 15000, count: 0 }
    ]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isVirtualThisResultVisible, setVirtualThisResultVisibility] = useState(false);
    const [quarterCount, setQuarterCount] = useState(1);
    const [previousProfitRate, setPreviousProfitRate] = useState(0);
    const [totalProfit, setTotalProfit] = useState(0);
    const [totalInvestment, setTotalInvestment] = useState(0);
    const [quarterlyProfitRates, setQuarterlyProfitRates] = useState([]);

    const toggleNextVisibility = () => {
        setNextVisibility(prevVisibility => !prevVisibility);
    };

    const toggleVirtualThisResultVisibility = () => {
        setVirtualThisResultVisibility(prevVisibility => !prevVisibility);
    };

    function updateTotal() {
        const total = items.reduce((sum, item) => {
            return sum + (item.currentPrice * item.quantity);
        }, 0);
        return total;
    }

    const updateEstimated = () => {
        return money + updateTotal();
    };

    const updateRate = () => {
        let total = 0;
        items.forEach(item => {
            total += calculateProfitPercentage(item);
        });
        return total;
    };

    const updateNewsItems = () => {
        const shuffledNews = shuffleArray(newsData);
        const selectedNews = shuffledNews.slice(0, 4);
        if (quarterCount != 1) {
            let totalImpact = {}; // 뉴스별 영향을 누적할 객체

            selectedNews.forEach(news => {
                const stockImpact = news.stock_impact;
                Object.keys(stockImpact).forEach(stockIndex => {
                    if (totalImpact[stockIndex] === undefined) {
                        totalImpact[stockIndex] = 0;
                    }
                    totalImpact[stockIndex] += stockImpact[stockIndex]; // 동일 인덱스의 값 누적
                });
            });

            updatePrices(totalImpact); // 영향 적용하여 가격 업데이트
            console.log("뉴스별 주식 영향:", totalImpact);
        }
        setNewsItems(selectedNews);
    };

    const updatePrices = (totalImpact) => {
        // 각 종목에 대한 변경값을 totalImpact 값으로 초기화합니다.
        const changes = Object.values(totalImpact);

        // 변경된 항목들을 담을 배열을 초기화합니다.
        const updatedItems = [];

        // 기존 항목 배열을 순회하면서 변경값을 적용합니다.
        items.forEach((item, index) => {
            const change = changes[index] || 0; // 해당 종목에 대한 변경값을 가져옵니다. 없으면 0으로 처리
            const newPrice = item.currentPrice + change;

            // 변경된 항목을 새로운 객체로 생성하고 배열에 추가합니다.
            updatedItems.push({
                ...item,
                percentageIncrease: change,
                currentPrice: newPrice
            });
        });

        // 변경된 항목 배열을 상태에 업데이트합니다.
        setItems(updatedItems);
    };



    const handleBuy = () => {
        if (selectedItem) {
            handle = "매수";
            console.log("매수 버튼 클릭 - 선택된 항목:", selectedItem);
            setNextVisibility(true);
        } else {
            console.log("매수 버튼 클릭 - 아무 항목도 선택되지 않았습니다.");
        }
    };

    const handleSell = () => {
        if (selectedItem && selectedItem.quantity > 0) {
            handle = "매도";
            console.log("매도 버튼 클릭 - 선택된 항목:", selectedItem);
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

    const handleResult = () => {
        setVirtualThisResultVisibility(isVirtualThisResultVisible ? false : true);
    }

    const handleTransaction = (count, newMoney, newCountCoin) => {
        const updatedItems = items.map(item => {
            if (item.name === selectedItem.name) {
                if (handle === "매수") {
                    return { ...item, quantity: newCountCoin, purchasePrice: item.purchasePrice === 0 ? item.currentPrice : item.purchasePrice };
                } else {
                    return { ...item, quantity: newCountCoin };
                }
            }
            return item;
        });
        setItems(updatedItems);
        setMoney(newMoney);
    };

    // 수익률
    const calculateProfitPercentage = (item) => {
        if (item.purchasePrice === 0 || item.quantity === 0) return 0; // Check if quantity is zero
        const currentTotalPrice = item.currentPrice * item.quantity;
        const purchaseTotalPrice = item.purchasePrice * item.quantity;
        if (purchaseTotalPrice === 0) return 0; // Check if purchaseTotalPrice is zero
        return ((currentTotalPrice - purchaseTotalPrice) / purchaseTotalPrice) * 100;
    };


    useEffect(() => {
        updateNewsItems();
    }, []);

    return (
        <div>
            <Header />
            <main>
                <Part1 key="part1" money={money} items={items} handleBuy={handleBuy} handleSell={handleSell} selectItem={selectItem} />
                <Part2
                    key="part2"
                    money={money}
                    setMoney={setMoney}
                    isTableShown={isTableShown}
                    setIsTableShown={setIsTableShown}
                    newsItems={newsItems}
                    updateNewsItems={updateNewsItems}
                    items={items}
                    selectedItem={selectedItem}
                    calculateProfitPercentage={calculateProfitPercentage}
                />
                <Part3
                    key="part3"
                    updateNewsItems={updateNewsItems}
                    handleResult={handleResult}
                    quarterCount={quarterCount}
                    seedMoney={seedMoney}
                    updateEstimated={updateEstimated}
                    money={money}
                    updateTotal={updateTotal}
                    updateRate={updateRate}
                />
                {isVirtualThisResultVisible && (
                    <VirtualThisResult
                        handleResult={handleResult}
                        money={money}
                        quarterCount={quarterCount}
                        updateRate={updateRate}
                        setQuarterCount={setQuarterCount}
                        setPreviousProfitRate={setPreviousProfitRate}
                        updateTotal={updateTotal}
                        setTotalProfit={setTotalProfit}
                        updateEstimated={updateEstimated}
                        setTotalInvestment={setTotalInvestment}
                        quarterlyProfitRates={quarterlyProfitRates}
                        setQuarterlyProfitRates={setQuarterlyProfitRates}
                    />
                )}
                {selectedItem && isNextVisible && (
                    <SellAndBuy
                        key="sellAndBuy"
                        name={selectedItem.name}
                        price={selectedItem.price}
                        quantity={selectedItem.quantity}
                        currentPrice={selectedItem.currentPrice}
                        purchasePrice={selectedItem.purchasePrice}
                        count={selectedItem.count}
                        handle={handle}
                        handleClose={handleClose}
                        selectItem={selectItem}
                        onTransaction={handleTransaction}
                        money={money}
                        selectedItem={selectedItem}
                    />
                )}
            </main>
        </div>
    );
}

export default App;