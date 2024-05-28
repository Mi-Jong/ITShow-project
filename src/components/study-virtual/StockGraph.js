import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";

function StockGraph({ firstItemPrice, updatePrices, item}) {
    let countNum = 0;
    const [priceData, setPriceData] = useState([
        ['Day', 'Low', 'Opening price', 'Closing price', 'High', { role: 'style' }],
    ]);
    const [beforePrice, setBeforePrice] = useState(0);

    useEffect(() => {
        countNum ++;
        if (beforePrice !== firstItemPrice && countNum <= 1) {
            // 이전 가격과 현재 가격 사이의 막대그래프를 생성
            setPriceData(priceData => [
                ...priceData,
                [
                    getDayOfWeek(priceData.length),
                    Math.min(beforePrice, firstItemPrice), // 최소값 - 10
                    Math.min(beforePrice, firstItemPrice),      // 최소값
                    Math.max(beforePrice, firstItemPrice),      // 최대값
                    Math.max(beforePrice, firstItemPrice) + 10, // 최대값 + 10
                    getColor(beforePrice, firstItemPrice)       // 이전 가격과 현재 가격 비교하여 색상 결정
                ]
            ]);
            // 현재 가격을 이전 가격으로 설정
            setBeforePrice(firstItemPrice);
        }
    }, [beforePrice, firstItemPrice]);

    const getDayOfWeek = (index) => {
        const dayIndex = index;
        return dayIndex + '분기';
    };

    const getColor = (openingPrice, closingPrice) => {
        return closingPrice < openingPrice ? 'blue' : 'red';
    };

    // Render the graph
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Chart
                chartType="CandlestickChart"
                width="100%"
                height="100%"
                data={priceData}
                options={{
                    legend: 'none',
                    title: `${item.name}`, // 그래프 제목 추가
                }}
            />
            <button onClick={updatePrices}>Update Prices</button>
        </div>
    );
}

export default StockGraph;
