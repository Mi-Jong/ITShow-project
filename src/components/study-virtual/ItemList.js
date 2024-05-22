import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp, FaSortDown, FaSortUp } from 'react-icons/fa';

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
}

export default ItemList;
