import React, { useState } from 'react';
import { FaSortUp, FaSortDown } from "react-icons/fa";
import '../css/style.css';
import '../css/SellAndBuy.css';

function SellAndBuy(props) {
    const [count, setCount] = useState(0);
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
                                    type="number" value={count} onChange={e => setCount(e.target.value)} />
                                    <span> 최대</span>
                                </span>
                            
                                <span>
                                    <button onClick={() => setCount(count + 1)}><FaSortUp /></button>  <button onClick={() => setCount(count - 1)}><FaSortDown /></button>
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
                    <button className='cancel'>취소</button>  <button className='buy'>{props.handle}</button>
                </div>
            </div>
        </section>
    );
}

export default SellAndBuy;