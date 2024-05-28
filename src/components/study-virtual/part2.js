import React, { useState, useEffect } from 'react';
import News from './news';
import Graph from './StockGraph';

function Part2({ seedMoney, isTableShown, setIsTableShown, newsItems, updateNewsItems, items, selectedItem }) {
    const [selectedItemIndex, setSelectedItemIndex] = useState(selectedItem != null ? selectedItem.id : 0);

    useEffect(() => {
        if (selectedItem != null) {
            setSelectedItemIndex(selectedItem.id);
        }
    }, [selectedItem]);

    // Calculate profit percentage
    const calculateProfitPercentage = (item) => {
        const currentTotalPrice = item.price * item.quantity; 
        const purchaseTotalPrice = item.purchasePrice;
        return ((currentTotalPrice - purchaseTotalPrice) / purchaseTotalPrice) * 100; 
    };

    // Handle click on item to show/hide graph
    const handleClick = (index) => {
        setSelectedItemIndex(index);
    };

    return (
        <section className="part" id="part2">
            {items.map((item, index) => {
                const isHidden = selectedItemIndex !== index ? 'hidden' : '';

                return (
                    <div key={index} className={`graph ${isHidden}`}>
                        <Graph firstItemPrice={item.price} item={item}/>
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
                                <th>{item.price}</th>
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
