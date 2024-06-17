import React, { useState, useEffect } from 'react';
import News from './news';
import Graph from './StockGraph';

function Part2({ seedMoney, isTableShown, setIsTableShown, newsItems, updateNewsItems, items, selectedItem, selectedItemIndex, calculateProfitPercentage, quarterCount, selectItem }) {
    const [selectedItemIndexInternal, setSelectedItemIndexInternal] = useState(selectedItemIndex); // 선택된 항목의 내부 인덱스 상태

    // 분기 상태 관리
    const [quarter, setQuarter] = useState(1); // 처음에 1분기로 초기화

    useEffect(() => {
        // 분기가 변경되는 로직 (예: 매 3개월마다)
        // 예시로 매 3초마다 분기를 변경하는 것으로 설정
        const interval = setInterval(() => {
            setQuarter(prevQuarter => prevQuarter === 4 ? 1 : prevQuarter + 1);
        }, 3000); // 3초마다 분기 변경 (실제 로직에 맞게 조정 필요)

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 clearInterval로 인터벌 정리
    }, []);

    useEffect(() => {
        setSelectedItemIndexInternal(selectedItemIndex); // 외부에서 선택된 항목 인덱스가 변경될 때 내부 상태 업데이트
    }, [selectedItemIndex]);

    // 항목 클릭 시 처리 함수
    const handleClick = (index) => {
        setSelectedItemIndexInternal(index); // 내부 상태 업데이트
        selectItem(items[index], index); // 부모 컴포넌트의 selectItem 함수 호출
    };

    return (
        <section className="part" id="part2">
            {items.map((item, index) => {
                const isHidden = selectedItemIndexInternal !== index ? 'hidden' : '';

                return (
                    <div key={index} className={`graph ${isHidden}`}>
                        <Graph firstItemPrice={item.currentPrice} item={item} quarter={quarter} quarterCount={quarterCount} /> {/* StockGraph에 분기 정보 전달 */}
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
