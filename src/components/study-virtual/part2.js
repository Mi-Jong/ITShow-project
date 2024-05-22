import React, { useEffect } from 'react';
import News from './news';

function Part2({ isTableShown, setIsTableShown, newsItems, updateNewsItems }) {
    useEffect(() => {
        updateNewsItems();
    }, []);

    return (
        <section className="part" id="part2">
            <div className="graph"></div>
            <div className="button-line">
                <button onClick={() => setIsTableShown(true)} style={{ borderBottom: isTableShown ? '5px solid #FFD601' : 'none' }}>표</button>
                <button onClick={() => setIsTableShown(false)} style={{ borderBottom: isTableShown ? 'none' : '5px solid #FFD601' }}>뉴스</button>
            </div>
            <div className="view" id={isTableShown ? 'table' : ''}>
                <table>
                    <tr>
                        <th>종목명</th>
                        <th>수량</th>
                        <th>한 주당 가격</th>
                        <th>매입 단가</th>
                        <th>수익률</th>
                    </tr>
                    {/* 데이터 행 추가 */}
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
