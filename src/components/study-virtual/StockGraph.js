import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";

function StockGraph({ firstItemPrice, updatePrices, item }) {
    let countNum = 0;
    const [priceData, setPriceData] = useState([
        ['Day', 'Low', 'Opening price', 'Closing price', 'High', { role: 'style' }],
    ]);
    const [beforePrice, setBeforePrice] = useState(firstItemPrice - 100);

    useEffect(() => {
        countNum++;
        if (beforePrice !== firstItemPrice && countNum <= 1) {
            // 이전 가격과 현재 가격 사이의 막대그래프를 생성
            setPriceData(priceData => [
                ...priceData,
                [
                    getDayOfWeek(priceData.length),
                    Math.min(beforePrice, firstItemPrice) - 100, // 최소값 - 100
                    Math.min(beforePrice, firstItemPrice),      // 최소값
                    Math.max(beforePrice, firstItemPrice),      // 최대값
                    Math.max(beforePrice, firstItemPrice) + 100, // 최대값 + 100
                    getColor(beforePrice, firstItemPrice)       // 이전 가격과 현재 가격 비교하여 색상 결정
                ]
            ]);
            // 현재 가격을 이전 가격으로 설정
            setBeforePrice(firstItemPrice);
        } else if (countNum <= 1) { // 값이 변하지 않았을 때 빈 값을 추가
            setPriceData(priceData => [
                ...priceData,
                [
                    getDayOfWeek(priceData.length),
                    0, // 빈 값
                    0, // 빈 값
                    0, // 빈 값
                    0, // 빈 값
                    'transparent' // 색상 없음
                ]
            ]);
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
                    bar: { groupWidth: '100%' }, // 막대의 너비 조정
                    candlestick: {
                        fallingColor: { strokeWidth: 0, fill: 'blue' }, // 하락할 때의 색상
                        risingColor: { strokeWidth: 0, fill: 'red' },   // 상승할 때의 색상
                    },
                    hAxis: {
                        viewWindow: {
                            min: 0, // x축의 최소값 설정
                            max: 6, // x축의 최대값 설정
                        }
                    }
                }}
            />
        </div>
    );
}

export default StockGraph;
