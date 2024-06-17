import React, { useState, useEffect } from 'react';
import Header from '../commonHeader'; // 공통 헤더 컴포넌트 import
import Part1 from './part1'; // 파트1 컴포넌트 import
import Part2 from './part2'; // 파트2 컴포넌트 import
import Part3 from './part3'; // 파트3 컴포넌트 import
import SellAndBuy from '../SellAndBuy'; // 매매 컴포넌트 import
import VirtualThisResult from '../virtual-thisResult'; // 가상 시뮬레이션 결과 컴포넌트 import
import { newsData } from '../../Data/news.js'; // 뉴스 데이터 import
import '../../css/style.css'; // 전체 스타일 CSS import
import '../../css/study-virtual.css'; // 가상 거래 스타일 CSS import

let handle = ""; // 매수/매도 처리를 위한 전역 변수

// 배열 섞기 함수 정의
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function App() {
    const seedMoney = 3000000; // 초기 자본금
    const [money, setMoney] = useState(seedMoney); // 현재 자본금 상태 관리
    const [newsItems, setNewsItems] = useState([]); // 뉴스 아이템 상태 관리
    const [isNextVisible, setNextVisibility] = useState(false); // 다음 단계 표시 여부 상태 관리
    const [isTableShown, setIsTableShown] = useState(true); // 테이블 표시 여부 상태 관리
    const [items, setItems] = useState([ // 거래 품목 배열 상태 관리
        { id: 0, name: 'SN', quantity: 0, price: 5000, purchasePrice: 0, currentPrice: 5000, count: 0 },
        { id: 1, name: 'JYB', quantity: 0, price: 4800, purchasePrice: 0, currentPrice: 4800, count: 0 },
        { id: 2, name: '소노공마라탕', quantity: 0, price: 15000, purchasePrice: 0, currentPrice: 15000, count: 0 },
        { id: 3, name: '왕카탕후루', quantity: 0, price: 13000, purchasePrice: 0, currentPrice: 13000, count: 0 },
        { id: 4, name: '삼쉉', quantity: 0, price: 7500, purchasePrice: 0, currentPrice: 7500, count: 0 },
        { id: 5, name: '네이비', quantity: 0, price: 7100, purchasePrice: 0, currentPrice: 7100, count: 0 }
    ]);
    const [selectedItem, setSelectedItem] = useState(null); // 선택된 품목 상태 관리
    const [selectedItemIndex, setSelectedItemIndex] = useState(0); // 선택된 품목 인덱스 상태 관리
    const [isVirtualThisResultVisible, setVirtualThisResultVisibility] = useState(false); // 가상 거래 결과 표시 여부 상태 관리
    const [quarterCount, setQuarterCount] = useState(1); // 분기 카운트 상태 관리
    const [previousProfitRate, setPreviousProfitRate] = useState(0); // 이전 수익률 상태 관리
    const [totalProfit, setTotalProfit] = useState(0); // 총 수익 상태 관리
    const [totalInvestment, setTotalInvestment] = useState(0); // 총 투자 상태 관리
    const [quarterlyProfitRates, setQuarterlyProfitRates] = useState([]); // 분기별 수익률 배열 상태 관리

    // 다음 단계 표시 여부 전환 함수
    const toggleNextVisibility = () => {
        setNextVisibility(prevVisibility => !prevVisibility);
    };

    // 가상 거래 결과 표시 여부 전환 함수
    const toggleVirtualThisResultVisibility = () => {
        setVirtualThisResultVisibility(prevVisibility => !prevVisibility);
    };

    // 총 투자 금액 업데이트 함수
    function updateTotal() {
        const total = items.reduce((sum, item) => {
            return sum + (item.currentPrice * item.quantity);
        }, 0);
        return total;
    }

    // 예상 금액 업데이트 함수
    const updateEstimated = () => {
        return money + updateTotal();
    };

    // 수익률 업데이트 함수
    const updateRate = () => {
        let total = 0;
        items.forEach(item => {
            total += calculateProfitPercentage(item);
        });
        return total;
    };

    // 뉴스 아이템 업데이트 함수
    const updateNewsItems = () => {
        const shuffledNews = shuffleArray(newsData); // 뉴스 아이템 섞기
        const selectedNews = shuffledNews.slice(0, 4); // 섞인 뉴스에서 4개 선택
        setNewsItems(selectedNews); // 선택된 뉴스 아이템 상태 업데이트
        if (quarterCount !== 1) {
            let totalImpact = {}; // 주식에 미치는 뉴스의 영향 누적

            selectedNews.forEach(news => {
                const stockImpact = news.stock_impact; // 주식 영향도 가져오기
                Object.keys(stockImpact).forEach(stockIndex => {
                    if (totalImpact[stockIndex] === undefined) {
                        totalImpact[stockIndex] = 0;
                    }
                    totalImpact[stockIndex] += stockImpact[stockIndex]; // 동일 인덱스에 대해 영향 누적
                });
            });

            updatePrices(totalImpact); // 영향에 따라 가격 업데이트
            console.log("뉴스별 주식 영향:", totalImpact);
        }
    };

    // 가격 업데이트 함수
    const updatePrices = (totalImpact) => {
        // totalImpact 값을 사용하여 변경사항 배열 초기화
        const changes = Object.values(totalImpact);

        // 업데이트된 아이템들을 담을 배열 초기화
        const updatedItems = [];

        // 기존 아이템 배열을 반복하며 변경사항 적용
        items.forEach((item, index) => {
            const change = changes[index] || 0; // 해당 인덱스의 변경사항 가져오기, 없으면 0으로 기본 설정
            let newPrice = item.currentPrice + change; // 새 가격 계산, const 대신 let 사용

            if (newPrice < 0) {
                newPrice = 0; // 새 가격이 음수일 경우 0으로 설정
            }

            // 업데이트된 아이템을 위한 새 객체 생성 후 updatedItems 배열에 추가
            updatedItems.push({
                ...item,
                percentageIncrease: change,
                currentPrice: newPrice
            });
        });

        // 업데이트된 아이템 배열로 상태 업데이트
        setItems(updatedItems);
    };

    // 매수 처리 함수
    const handleBuy = () => {
        if (selectedItem) {
            handle = "매수";
            console.log("매수 버튼 클릭 - 선택된 항목:", selectedItem);
            setNextVisibility(true);
        } else {
            console.log("매수 버튼 클릭 - 아무 항목도 선택되지 않았습니다.");
        }
    };

    // 매도 처리 함수
    const handleSell = () => {
        if (selectedItem && selectedItem.quantity > 0) {
            handle = "매도";
            console.log("매도 버튼 클릭 - 선택된 항목:", selectedItem);
            setNextVisibility(true);
        } else {
            console.log("매도 버튼 클릭 - 아무 항목도 선택되지 않았거나 보유량이 없습니다.");
        }
    };

    // 품목 선택 함수
    const selectItem = (item, index) => {
        setSelectedItem(item);
        setSelectedItemIndex(index); // 선택된 품목 인덱스 업데이트
    };

    // 다음 단계 모달 닫기 처리 함수
    const handleClose = () => {
        setNextVisibility(false);
    };

    // 가상 거래 결과 표시/숨김 처리 함수
    const handleResult = () => {
        setVirtualThisResultVisibility(prevVisibility => !prevVisibility);
    }

    // 거래 처리 함수
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
        setItems(updatedItems); // 업데이트된 아이템으로 상태 업데이트
        setMoney(newMoney); // 업데이트된 자본금으로 상태 업데이트
    };

    // 수익률 계산 함수
    const calculateProfitPercentage = (item) => {
        if (item.purchasePrice === 0 || item.quantity === 0) return 0; // 수량이 0일 경우 처리
        const currentTotalPrice = item.currentPrice * item.quantity; // 현재 총 가격 계산
        const purchaseTotalPrice = item.purchasePrice * item.quantity; // 매입 총 가격 계산
        if (purchaseTotalPrice === 0) return 0; // 매입 총 가격이 0일 경우 처리
        return ((currentTotalPrice - purchaseTotalPrice) / purchaseTotalPrice) * 100; // 수익률 계산
    };

    // 컴포넌트가 마운트될 때 뉴스 아이템 업데이트
    useEffect(() => {
        updateNewsItems();
    }, []);

    // JSX 반환
    return (
        <div>
            <Header /> {/* 공통 헤더 컴포넌트 */}
            <main>
                <Part1 key="part1" money={money} items={items} handleBuy={handleBuy} handleSell={handleSell} selectItem={selectItem} /> {/* 파트1 컴포넌트 */}
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
                    selectedItemIndex={selectedItemIndex}
                    calculateProfitPercentage={calculateProfitPercentage}
                    quarterCount={quarterCount}
                    selectItem={selectItem} // Part2로 selectItem 함수 전달
                /> {/* 파트2 컴포넌트 */}
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
                /> {/* 파트3 컴포넌트 */}
                {isVirtualThisResultVisible && (
                    <VirtualThisResult
                        handleResult={handleResult}
                        money={money}
                        seedMoney={seedMoney}
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

