import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp, FaSortDown, FaSortUp } from 'react-icons/fa';

function ItemList() {
    const [items, setItems] = useState([
        { name: 'Item 1', percentageIncrease: 100, price: 100 },
        { name: 'Item 2', percentageIncrease: 2000, price: 2000 },
        { name: 'Item 3', percentageIncrease: 150, price: 150 }
    ]);
    const [showItems, setShowItems] = useState(false);

    const calculateNewPrice = (price) => {
        const newPrice = price;
        return newPrice.toLocaleString();
    };
    

    const toggleItems = () => {
        setShowItems(!showItems);
    };

    const updatePrices = () => {
        const updatedItems = items.map(item => {
            const change = 300;
            const newPrice = item.price + change;
            return { ...item, percentageIncrease: change, price: newPrice };
        });
        setItems(updatedItems);
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
                            <p className="pay-coin">{calculateNewPrice(item.price)}원</p>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={updatePrices}>분기 업데이트</button>
        </div>
    );
}

export default ItemList;
