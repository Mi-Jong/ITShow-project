// StockGraph.js
import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";

function StockGraph({ firstItemPrice, updatePrices }) {
    let deforePrice = 0;
    const [priceData, setPriceData] = useState([]);

    useEffect(() => {
        // Update price data when first item's price changes
        if (priceData.length === 0) { // Check if it's the first update
            setPriceData([
                ['Day', 'Low', 'Opening price', 'Closing price', 'High', { role: 'style' }],
                // Use current day as 'Day', firstItemPrice for all price values, and determine color based on opening and closing prices
                [getDayOfWeek(1), firstItemPrice - 10, deforePrice, firstItemPrice, firstItemPrice + 10, getColor(firstItemPrice, deforePrice)]
            ]);
        } else {
            // Update the existing first data point
            setPriceData(prevData => {
                const newData = [...prevData];
                newData[1] = [
                    getDayOfWeek(prevData.length),
                    firstItemPrice - 10,
                    deforePrice,
                    firstItemPrice,
                    firstItemPrice + 10,
                    getColor(firstItemPrice, deforePrice)
                ];
                return newData;
            });
        }
    }, [firstItemPrice]);

    // Function to get day of the week
    const getDayOfWeek = (index) => {
        const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']; // Start from Monday
        const today = new Date();
        const dayIndex = (today.getDay() + index - 1) % 7; // Adjusting for future days
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
