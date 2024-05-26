import React, { useState } from 'react';
import { FaSortUp, FaSortDown } from "react-icons/fa";
import '../css/style.css';
import '../css/SellAndBuy.css';

function SellAndBuy(props) {
    let value = 0;
    const [count, setCount] = useState(0);
    const [money, setMoney] = useState(2000);
    const [countCoin, setCountCoin] = useState(0);
    const [error, setError] = useState('');

    const handleMaxClick = () => {
        if (props.handle === "매수") {
            setCount(Math.floor(money / props.price));
        } else if (props.handle === "매도") {
            setCount(countCoin);
        }
    };

    const handleBuyClick = () => {
        if ((money < props.price * count && props.handle === "매수") || (countCoin < count && props.handle === "매도")) {
            setError('수량이 올바르지 않습니다');
        } else {
            if (props.handle === "매수") {
                setMoney(money - props.price * count);
                setCountCoin(countCoin + count);
            } else if (props.handle === "매도") {
                setMoney(money + props.price * count);
                setCountCoin(countCoin - count);

            }
            setError('');
            props.handleClose();
            props.selectItem(null);
        }
    };

    const handleEnd = () => {
        props.selectItem(null);
        props.handleClose();
    };

    return (
        <section id="SellAndBuy">
            <div className="SellAndBuy">
                <table className='sAndBtable'>
                    <tbody>
                        <tr>
                            <th scope="col">종목</th>
                            <td>{props.name}</td>
                        </tr>
                        <tr>
                            <th scope="col">수량</th>
                            <td className='tdAlign'>
                                <span>
                                    <input className='amount'
                                        type="number" value={count} onChange={e => value = setCount(Math.max(0, Number(e.target.value)))} />
                                    <span onClick={handleMaxClick} style={{ cursor: 'pointer' }}> 최대</span>
                                </span>
                                <span>
                                    <button onClick={() => setCount(count + 1)}><FaSortUp /></button>
                                    <button onClick={() => setCount(Math.max(0, count - 1))}><FaSortDown /></button>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="col">가격</th>
                            <td>{props.price * count}</td>
                        </tr>
                    </tbody>
                </table>

                <div className='buttons'>
                    <button className='cancel' onClick={handleEnd}>취소</button>
                    <button className='buy' onClick={handleBuyClick}>{props.handle}</button>
                    {error && <p className='error'>*{error}*</p>}
                </div>
            </div>
        </section>
    );
}

export default SellAndBuy;
    