    // StockGraph.js
    import React, { useEffect, useState } from 'react';
    import { Chart } from "react-google-charts";

    function StockGraph({ firstItemPrice, updatePrices }) {
        let deforePrice = 0;
        const [priceData, setPriceData] = useState([
            ['Day', 'Low', 'Opening price', 'Closing price', 'High', { role: 'style' }],
        ]);

        useEffect(() => {
            // Update price data when first item's price changes
            setPriceData(priceData => [
                ...priceData,
                // Use current day as 'Day', firstItemPrice for all price values, and determine color based on opening and closing prices
                [getDayOfWeek(priceData.length + 1), firstItemPrice - 10, deforePrice, firstItemPrice, firstItemPrice + 10, getColor(firstItemPrice, deforePrice)]
            ]);
        }, [firstItemPrice]);

        // Function to get day of the week
        const getDayOfWeek = (index) => {
            const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const today = new Date();
            const dayIndex = (today.getDay() + index) % 7; // Adjusting for future days
            return daysOfWeek[dayIndex];
        };

        // Function to determine color based on opening and closing prices
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
