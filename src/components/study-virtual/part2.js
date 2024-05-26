import React, { useEffect } from 'react';
import News from './news';
import Graph from './StockGraph';

function Part2({ seedMoney, isTableShown, setIsTableShown, newsItems, updateNewsItems, items }) {
    useEffect(() => {
        updateNewsItems();
    }, []);

    // 수익률 계산
    const calculateProfitPercentage = (item) => {
        const currentTotalPrice = item.price * item.quantity; // 현재 총 가격
        const purchaseTotalPrice = item.purchasePrice; // 매입 단가
        return ((currentTotalPrice - purchaseTotalPrice) / purchaseTotalPrice) * 100; // ((현재 가격 - 매입 가격) / 매입 가격) * 100
    };

    return (
        <section className="part" id="part2">
            <div className="graph"><Graph firstItemPrice={items.length > 0 ? items[0].price : 0} /></div>
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
                            <tr key={index}>
                                <th>{item.name}</th>
                                <th>{item.quantity}</th>
                                <th>{item.price}</th>
                                <th>{item.purchasePrice}</th>
                                <th>{isNaN(calculateProfitPercentage(item)) ? '0%' : `${calculateProfitPercentage(item)}%`}</th>

                            </tr>
                        ))}
                </table>
            </div>
            <div className="view" id={isTableShown ? '' : 'news'}>
                <div className="news-container">
                    {newsItems.map((news, index) => (
                        <News key={index} img={news.image_url} title={news.title} content={news.content} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Part2;
