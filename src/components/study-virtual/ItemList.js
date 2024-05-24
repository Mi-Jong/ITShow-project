import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp, FaSortDown, FaSortUp } from 'react-icons/fa';

function ItemList({ items, selectItem }) {
    const [showItems, setShowItems] = useState(false);

    const calculateNewPrice = (price) => {
        const newPrice = Number(price);
        return newPrice.toLocaleString();
    };

    const toggleItems = () => {
        setShowItems(!showItems);
    };

    const handleClickItem = (item) => {
        selectItem(item);
    };

    return (
        <div className='list-stock'>
            <div>
                <h2>종목명</h2>
                <div className="customIcon" style={{ cursor: 'pointer' }} onClick={toggleItems} aria-label={showItems ? "Collapse items" : "Expand items"}>
                    {showItems ? <FaAngleUp /> : <FaAngleDown />}
                </div>
            </div>
            {showItems && (
                <ul>
                    {items.map((item, index) => (
                        <li key={item.id || index} onClick={() => handleClickItem(item)}>
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
        </div>
    );
}

export default ItemList;
