import React, { useState } from 'react';
import ItemList from './ItemList';

function Part1({ seedMoney, items }) {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleBuy = () => {
        if (selectedItem) {
            console.log("매수 버튼 클릭 - 선택된 항목:", selectedItem);
            setSelectedItem(null);
        } else {
            console.log("매수 버튼 클릭 - 아무 항목도 선택되지 않았습니다.");
        }
    };
    const handleSell = () => {
        if (selectedItem) {
            console.log("매도 버튼 클릭 - 선택된 항목:", selectedItem);
            setSelectedItem(null);
        } else {
            console.log("매도 버튼 클릭 - 아무 항목도 선택되지 않았습니다.");
        }
    };

    const selectItem = (item) => {
        setSelectedItem(item);
    };

    return (
        <section className="part" id="part1">
            <div className='wer'>
                <div className='balance'>
                    <p className='bal-title'>내 잔고</p>
                    <h2 className='bal-pay'>{seedMoney}￦</h2>
                </div>
                <div className='purchase'>
                    <button className='buy' onClick={handleBuy}>매수</button>
                    <button className='sell'onClick={handleSell}>매도</button>
                </div>
            </div>

            <ItemList items={items} selectItem={selectItem} />
        </section>
    );
}

export default Part1;
