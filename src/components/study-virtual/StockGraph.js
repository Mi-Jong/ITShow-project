import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";

function StockGraph({ firstItemPrice, item, quarterCount }) {
    const [priceData, setPriceData] = useState([
        ['날짜', '저가', '시가', '종가', '고가', { role: 'style' }],
    ]);
    const [beforePrice, setBeforePrice] = useState(firstItemPrice - 100);

    useEffect(() => {
        if (quarterCount > 0) {
            // 새 데이터 항목 구성
            const newDataEntry = [
                `${quarterCount}분기`,                         // 날짜
                Math.min(beforePrice, firstItemPrice) - 100,   // 저가
                Math.min(beforePrice, firstItemPrice),         // 시가
                Math.max(beforePrice, firstItemPrice),         // 종가
                Math.max(beforePrice, firstItemPrice) + 100,   // 고가
                getColor(beforePrice, firstItemPrice)          // 색상
            ];

            // priceData에서 각 분기의 마지막 항목만 업데이트
            setPriceData(prevData => {
                const lastQuarterIndex = prevData.findIndex(entry => entry[0] === `${quarterCount}분기`);
                if (lastQuarterIndex !== -1) {
                    prevData.splice(lastQuarterIndex, 1, newDataEntry);
                } else {
                    prevData.push(newDataEntry);
                }
                return [...prevData];
            });

            // 이전 가격 업데이트
            setBeforePrice(firstItemPrice);
        }
    }, [quarterCount, firstItemPrice]);

    const getColor = (openingPrice, closingPrice) => {
        return closingPrice < openingPrice ? 'blue' : (closingPrice == openingPrice ? 'gray': 'red');
    };

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Chart
                chartType="CandlestickChart"
                width="100%"
                height="400px" // 필요에 따라 높이 조정
                data={priceData}
                options={{
                    legend: 'none',
                    title: `${item.name}`, // 차트 제목
                    bar: { groupWidth: '100%' }, // 막대 너비
                    candlestick: {
                        fallingColor: { strokeWidth: 0, fill: 'blue' }, // 하락 캔들 색상
                        risingColor: { strokeWidth: 0, fill: 'red' },   // 상승 캔들 색상
                    },
                    hAxis: {
                        title: '날짜', // X축 제목
                        viewWindow: {
                            min: 0, // X축 최소 값
                            max: priceData.length, // 데이터 길이에 따라 동적으로 조정
                        }
                    }
                }}
            />
        </div>
    );
}

export default StockGraph;
