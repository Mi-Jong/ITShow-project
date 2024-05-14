import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp, FaSortDown, FaSortUp } from 'react-icons/fa';
import Header from './header';
import '../css/style.css';
import '../css/study-virtual.css';

function Part1({ toggleNext }) {
    return (
        <section className="part" id="part1">
            <div className='wer'>
                <div className='balance'>
                    <p className='bal-title'>내 잔고</p>
                    <h2 className='bal-pay'>00000</h2>
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
        { name: 'Item 2', percentageIncrease: -1500, price: 200 },
        { name: 'Item 3', percentageIncrease: 2000000, price: 150 },
        { name: 'Item 1', percentageIncrease: -10000, price: 100 },
        { name: 'Item 2', percentageIncrease: -1500, price: 200 },
        { name: 'Item 3', percentageIncrease: -2000000, price: 150 }
    ]);
    const [showItems, setShowItems] = useState(false);

    const calculateNewPrice = (price, percentageIncrease) => {
        return price * (1 + percentageIncrease / 100);
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
                            <p className="pay-coin">{calculateNewPrice(item.price, item.percentageIncrease).toFixed(3)}원</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );


};
function Part2({ isTableShown, setIsTableShown }) {
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
                <News title="제목" time="2024-09-08" sub="내용용내내용용내내용용내내용용내내용용내내용용내내용용내내용용내내용용내내용용내내용용내내용용내" />
                <News title="제목" time="2024-09-08" sub="내용용내내용용내내용용내내용용내내용용내내용용내내용용내내용용내내용용내내용용내내용용내내용용내" />
                <News title="제목" time="2024-09-08" sub="내용용내내용용내내용용내내용용내내용용내내용용내내용용내내용용내내용용내내용용내내용용내내용용내" />
                <News title="제목" time="2024-09-08" sub="내용용내내용용내내용용내내용용내내용용내내용용내내용용내내용용내내용용내내용용내내용용내내용용내" />
                <News title="제목" time="2024-09-08" sub="내용용내내용용내내용용내내용용내내용용내내용용내내용용내내용용내내용용내내용용내내용용내내용용내" />
            </div>
        </section>
    );
}

function News(props) {
    return (
        <div className='news'>
            <img src='' title='ee'></img>
            <div className='text'>
                <h4>{props.title}</h4>
                <h6>{props.time}</h6>
                <h5>{props.sub}</h5>
            </div>
        </div>
    )
}

function Part3() {
    return (
        <section className="part" id="part3">
            <div className='quarter'>
                <p>현재 분기</p>
                <div className='quarter-list'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </div>
            </div>
            <div className='list-grid'>
                <List_money title="시드머니" money="0000" />
                <List_money title="추정자산" money="0000" />
                <List_money title="주문 가능 금액" money="0000" />
                <List_money title="평가손익" money="0000" />
                <div className='rate'>
                    <p>수익률</p>
                    <div className='percent'>
                        <h3>100%</h3>
                        <h2>100%</h2>
                    </div>
                </div>
            </div>
            <button>다음 분기</button>
        </section>
    );
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

function App() {
    const [isNextVisible, setNextVisibility] = useState(false);
    const [isTableShown, setIsTableShown] = useState(true);

    const toggleNextVisibility = () => {
        setNextVisibility(prevVisibility => !prevVisibility);
    };

    return (
        <>
            <Header />
            <main>
                <Part1 toggleNext={toggleNextVisibility} />
                <Part2 isTableShown={isTableShown} setIsTableShown={setIsTableShown} />
                <Part3 />
            </main>
        </>
    );
}


export default App;
