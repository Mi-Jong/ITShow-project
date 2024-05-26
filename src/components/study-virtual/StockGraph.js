    // StockGraph.js
    import React, { useEffect, useState } from 'react';
    import { Chart } from "react-google-charts";

    function StockGraph({ firstItemPrice, updatePrices }) {
        let deforePrice = 0;
        let countNum = 0;
        const [priceData, setPriceData] = useState([
            ['Day', 'Low', 'Opening price', 'Closing price', 'High', { role: 'style' }],
        ]);

        useEffect(() => {
            countNum++;
            if(countNum <= 1){
                setPriceData(priceData => [
                    ...priceData,
                    [getDayOfWeek(priceData.length), firstItemPrice - 10, deforePrice, firstItemPrice, firstItemPrice + 10, getColor(firstItemPrice, deforePrice)]
                ]);
            }
        }, [firstItemPrice]);

        const getDayOfWeek = (index) => {
            const dayIndex = index;
            return dayIndex+'분기';
        };

        const getColor = (closingPrice, openingPrice) => {
            return closingPrice > openingPrice ? 'red' : 'blue';
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
                    }}
                />
                <button onClick={updatePrices}>Update Prices</button>
            </div>
        );
    }

    export default StockGraph;
