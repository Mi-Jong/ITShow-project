import React from 'react';
import ItemList from './ItemList';

function Part1({ seedMoney, items, handleBuy, handleSell, selectItem }) {
    return (
        <section className="part" id="part1">
            <div className='wer'>
                <div className='balance'>
                    <p className='bal-title'>내 잔고</p>
                    <h2 className='bal-pay'>{seedMoney}￦</h2>
                </div>
                <div className='purchase'>
                    <button className='buy' onClick={handleBuy}>매수</button>
                    <button className='sell' onClick={handleSell}>매도</button>
                </div>
            </div>

            <ItemList items={items} selectItem={selectItem} />
        </section>
    );
}

export default Part1;