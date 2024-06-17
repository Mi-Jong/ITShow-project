import React, { useState, useEffect } from 'react';
import News from './news';
import Graph from './StockGraph';

function Part2({ seedMoney, isTableShown, setIsTableShown, newsItems, updateNewsItems, items, selectedItem, selectedItemIndex, calculateProfitPercentage, quarterCount, selectItem }) {
    const [selectedItemIndexInternal, setSelectedItemIndexInternal] = useState(selectedItemIndex); // Use internal state for selected item index
    const [quarter, setQuarter] = useState(1); // Initialize with the first quarter

    useEffect(() => {
        // Logic to determine quarter change (example: every 3 months)
        // For demonstration, I'll increment quarter every 3 seconds
        const interval = setInterval(() => {
            setQuarter(prevQuarter => prevQuarter === 4 ? 1 : prevQuarter + 1);
        }, 3000); // Change quarter every 3 seconds for demonstration, adjust as per your logic

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setSelectedItemIndexInternal(selectedItemIndex); // Update internal state when external selectedItemIndex changes
    }, [selectedItemIndex]);

    const handleClick = (index) => {
        setSelectedItemIndexInternal(index); // Update internal state
        selectItem(items[index], index); // Trigger selectItem function from parent
    };

    return (
        <section className="part" id="part2">
            {items.map((item, index) => {
                const isHidden = selectedItemIndexInternal !== index ? 'hidden' : '';

                return (
                    <div key={index} className={`graph ${isHidden}`}>
                        <Graph firstItemPrice={item.currentPrice} item={item} quarter={quarter} quarterCount={quarterCount} /> {/* Pass quarter to StockGraph */}
                    </div>
                );
            })}

            <div className="button-line">
                <button onClick={() => setIsTableShown(true)} style={{ borderBottom: isTableShown ? '5px solid #FFD601' : 'none' }}>표</button>
                <button onClick={() => setIsTableShown(false)} style={{ borderBottom: isTableShown ? 'none' : '5px solid #FFD601' }}>뉴스</button>
            </div>
            <div className="view" id={isTableShown ? 'table' : ''}>
                <table>
                        <tr>
                            <th>종목명</th>
                            <th>수량</th>
                            <th>현재 가격</th>
                            <th>매입 단가</th>
                            <th>수익률</th>
                        </tr>
                        {items.map((item, index) => (
                            <tr key={index} onClick={() => handleClick(index)}>
                                <th>{item.name}</th>
                                <th>{item.quantity}</th>
                                <th>{item.currentPrice}</th>
                                <th>{item.purchasePrice}</th>
                                <th>{isNaN(calculateProfitPercentage(item)) ? '0%' : `${calculateProfitPercentage(item).toFixed(2)}%`}</th>
                            </tr>
                        ))}
                </table>
            </div>
            <div className="view" id={isTableShown ? '' : 'news'}>
                <div className="news-container">
                    {newsItems.map((news, index) => (
                        <News key={index} url={news.image_url} title={news.title} content={news.content} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Part2;
