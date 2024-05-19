import React, { useState, useEffect } from 'react';

import { FaAngleDown, FaAngleUp, FaSortDown, FaSortUp } from 'react-icons/fa';
import VirtualThisResult from './virtual-thisResult.js';
import newsData from '../Data/news.json';
import Header from './header.js'
import '../css/style.css';
import '../css/study-virtual.css';
let seedMoney = 300000;

function App() {
    const [newsItems, setNewsItems] = useState([]);
    const [isNextVisible, setNextVisibility] = useState(false);
    const [isTableShown, setIsTableShown] = useState(true);

    const toggleNextVisibility = () => {
        setNextVisibility(prevVisibility => !prevVisibility);
    };

    const updateNewsItems = () => {
        const shuffledNews = shuffleArray(newsData);
        const selectedNews = shuffledNews.slice(0, 4); // 상위 4개의 뉴스만 선택
        setNewsItems(selectedNews);
    };
    useEffect(() => {
        updateNewsItems();
    }, []);

    return (
        <>
            <Header />
            <main>
                <Part1 toggleNext={toggleNextVisibility} />
                <Part2 isTableShown={isTableShown} setIsTableShown={setIsTableShown} newsItems={newsItems} updateNewsItems={updateNewsItems} />
                <Part3 updateNewsItems={updateNewsItems} />
            </main>
        </>
    );
}


function Part1({ toggleNext }) {
    return (
        <section className="part" id="part1">
            <div className='wer'>
                <div className='balance'>
                    <p className='bal-title'>내 잔고</p>
                    <h2 className='bal-pay'>{seedMoney}￦</h2>
                </div>
                <div className='purchase'>
                    <button className='buy'>매수</button>
                    <button className='sell'>매도</button>
                </div>
            </div>

            <ItemList />
        </section>
    );
}

function ItemList() {
    const [items, setItems] = useState([
        { name: 'Item 1', percentageIncrease: 10000, price: 100 },
        { name: 'Item 2', percentageIncrease: -1500, price: 2000 },
        { name: 'Item 3', percentageIncrease: 2000000, price: 150 },
        { name: 'Item 1', percentageIncrease: -10000, price: 100 },
        { name: 'Item 2', percentageIncrease: -1500, price: 200 },
        { name: 'Item 3', percentageIncrease: -2000000, price: 150 }
    ]);
    const [showItems, setShowItems] = useState(false);

    const calculateNewPrice = (price, percentageIncrease) => {
        return (String)(price + percentageIncrease).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
    };

    const toggleItems = () => {
        setShowItems(!showItems);
    };

    return (
        <div className='list-stock'>
            <div>
                <h2>종목명</h2>
                <div className="customIcon" style={{ cursor: 'pointer' }} onClick={toggleItems}>
                    {showItems ? <FaAngleUp /> : <FaAngleDown />}
                </div>
            </div>
            {showItems && (
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            <p className="coin-name">{item.name}</p>
                            <div className='change' style={{ display: 'flex', alignItems: 'center' }}>
                                <p style={{ color: item.percentageIncrease < 0 ? 'blue' : item.percentageIncrease > 0 ? 'red' : 'gray' }}>
                                    {item.percentageIncrease < 0 ? <FaSortDown /> : <FaSortUp />}
                                    {item.percentageIncrease}
                                </p>
                            </div>
                            <p className="pay-coin">{calculateNewPrice(item.price, item.percentageIncrease)}원</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );


};
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
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
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

function News(props) {
    return (
        <div className='news'>
            <img src={props.img} title='ee'></img>
            <div className='text'>
                <h4>{props.title}</h4>
                <h6>2024.06.10</h6>
                <h5>{props.content}</h5>
            </div>
        </div>
    )
}

function Part3({ updateNewsItems }) {
    const [quarterCount, setQuarterCount] = useState(1);

    useEffect(() => {
        updateNewsItems();
    }, [quarterCount]);

    const addQuarter = () => {
        if (quarterCount < 4) {
            setQuarterCount(prevCount => prevCount + 1);
            // 결과창 
        } else {
            //마지막 결과창
        }
    };

    return (
        <section className="part" id="part3">
            <div className='quarter'>
                <p>현재 분기</p>
                <div className='quarter-list'>.
                    {[...Array(4)].map((_, index) => (
                        <li key={index} style={{ backgroundColor: index < quarterCount ? '#142B6F' : '#ccc' }}></li>
                    ))}
                </div>
            </div>
            <div className='list-grid'>
                <List_money title="시드머니" money={seedMoney} />
                <List_money title="추정자산" money={seedMoney} />
                <List_money title="주문 가능 금액" money={seedMoney} />
                <List_money title="평가손익" money={seedMoney} />
                <div className='rate'>
                    <p>수익률</p>
                    <div className='percent'>
                        <h3>100%</h3>
                        <h2>100%</h2>
                    </div>
                </div>
            </div>
            <button onClick={addQuarter}>다음 분기</button>
        </section>
    );
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function List_money(props) {
    return (
        <div className='grid'>
            <div className='name'>
                <p className='title'>{props.title}</p>
                <icon>d</icon>
            </div>
            <div className='money'>{props.money}</div>
        </div>
    )
}


export default App;
