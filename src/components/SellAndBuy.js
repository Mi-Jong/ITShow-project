import React, { useState, useEffect } from 'react';
import { FaSortUp, FaSortDown } from "react-icons/fa";
import '../css/style.css';
import '../css/SellAndBuy.css';

function SellAndBuy(props) {
    const [count, setCount] = useState(0);
    const [money, setMoney] = useState(props.seedMoney);
    const [countCoin, setCountCoin] = useState(props.selectedItem.quantity);
    const [error, setError] = useState('');

    useEffect(() => {
        setCount(0);  // Reset count when SellAndBuy opens
        setMoney(props.seedMoney);
        setCountCoin(props.selectedItem.quantity);
    }, [props.seedMoney, props.selectedItem.quantity]);

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
            let newMoney = money;
            let newCountCoin = countCoin;
            if (props.handle === "매수") {
                newMoney -= props.price * count;
                newCountCoin += count;
            } else if (props.handle === "매도") {
                newMoney += props.price * count;
                newCountCoin -= count;
            }

            setError('');
            props.onTransaction(count, newMoney, newCountCoin);
            props.handleClose();
        }
    };

    const handleEnd = () => {
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
                                        type="number" value={count} onChange={e => setCount(Math.max(0, Number(e.target.value)))} />
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
