import React, { useState } from 'react';
import { FaSortUp, FaSortDown } from "react-icons/fa6";
import '../css/style.css';
import '../css/SellAndBuy.css';

function SellAndBuy({ action, name, price, onCancel }) {
    const [count, setCount] = useState(0);

    const handleCountChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value)) {
            setCount(value);
        }
    };

    return (
        <div id="SellAndBuy">
            <table className='sAndBtable'>
                <tbody>
                    <tr>
                        <th scope="col">종목</th>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <th scope="col">수량</th>
                        <td className='tdAlign'>
                            <span>
                                <input
                                    className='amount'
                                    type="number"
                                    value={count}
                                    onChange={handleCountChange}
                                />
                                <span> 최대</span>
                            </span>
                            <span>
                                <button onClick={() => setCount(count + 1)}><FaSortUp /></button>
                                <button onClick={() => setCount(count - 1)}><FaSortDown /></button>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <th scope="col">가격</th>
                        <td>{price}</td>
                    </tr>
                </tbody>
            </table>

            <div className='buttons'>
                <button className='cancel' onClick={onCancel}>취소</button>
                <button className='buy'>{action}</button>
            </div>
        </div>
    );
}

export default SellAndBuy;
