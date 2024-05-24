import React, { useState } from 'react';
import { FaSortUp, FaSortDown } from "react-icons/fa";
import '../css/style.css';
import '../css/SellAndBuy.css';

function SellAndBuy(props) {
    const [count, setCount] = useState(0);
    let money = 2000;
    let countCoin = 2;
    const handleMaxClick = () => {
        if (props.handle === "매수") {
            setCount(100);
        }else if (props.handle === "매도") {
            setCount(10);
        }
    };

    const handleBuyClick = () => {
        if((money < props.price * count && props.handle == "매수") || (countCoin < count && props.handle == "매도") ){
            return 0;
        }else if(props.handle == "매수"){
            money -= props.price * count;
            countCoin += count;
        }else if(props.handle == "매도"){
            money += props.price * count;
            countCoin -= count;
        }
        console.log(`${props.handle} button clicked`);
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
                                    type="number" value={count} onChange={e => setCount(Number(e.target.value))} />
                                    <span onClick={handleMaxClick} style={{ cursor: 'pointer' }}> 최대</span>
                                </span>
                                <span>
                                    <button onClick={() => setCount(count + 1)}><FaSortUp /></button>  
                                    <button onClick={() => setCount(count - 1)}><FaSortDown /></button>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="col">가격</th>
                            <td>{props.price}</td>
                        </tr>
                    </tbody>
                </table>

                <div className='buttons'>
                    <button className='cancel' onClick={props.handleClose}>취소</button>  
                    <button className='buy' onClick={handleBuyClick}>{props.handle}</button>
                </div>
            </div>
        </section>
    );
}

export default SellAndBuy;
