import React from 'react';
import ItemList from './ItemList';

function Part1({ seedMoney, toggleNext }) {
    return (
        <section className="part" id="part1">
            <div className='wer'>
                <div className='balance'>
                    <p className='bal-title'>내 잔고</p>
                    <h2 className='bal-pay'>{seedMoney}￦</h2>
                </div>
                <div className='purchase'>
                    <button className='buy'>매수</button>
                    <button className='sell'>매도</button>
                </div>
            </div>

            <ItemList />
        </section>
    );
}

export default Part1;
