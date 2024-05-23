import React, { useState } from 'react';
import { FaSortUp, FaSortDown } from "react-icons/fa";
import '../css/style.css';
import '../css/SellAndBuy.css';

function SellAndBuy(props) {
    const [count, setCount] = useState(0);

    const handleMaxClick = () => {
        if (props.handle === "매수") {
            setCount(100);
        }else if (props.handle === "매도") {
            setCount(10);
        }
    };

    const handleBuyClick = () => {
        if(false){
            // 만약에 돈이부족하거나 팬매를 할수 없는 양이라면 
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
