import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { FaSortUp } from "react-icons/fa6";
import { FaSortDown } from "react-icons/fa6";
import '../css/style.css';
import '../css/SellAndBuy.css';

function SellAndBuy() {
    const [count, setCount] = useState(0);
    return (
        <section id="SellAndBuy">
            <div class="SellAndBuy">
                <table className='sAndBtable'>
                    <tr>
                        <th scope="col">종목</th>
                        <td>삼성</td>
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
                        <td>26000</td>
                    </tr>
                </table>

                <div className='buttons'>
                    <button className='cancel'>취소</button>  <button className='buy'>매수</button>
                </div>
            </div>
        </section>
    );
}

export default SellAndBuy;
