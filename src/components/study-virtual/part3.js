import React, { useState, useEffect } from 'react';
import ListMoney from './listMoney';

function Part3({ updateNewsItems }) {
    const [quarterCount, setQuarterCount] = useState(1);

    useEffect(() => {
        updateNewsItems();
    }, [quarterCount]);

    const addQuarter = () => {
        if (quarterCount < 4) {
            setQuarterCount(prevCount => prevCount + 1);
            // 결과창 
        } else {
            //마지막 결과창
        }
    };

    return (
        <section className="part" id="part3">
            <div className='quarter'>
                <p>현재 분기</p>
                <div className='quarter-list'>
                    {[...Array(4)].map((_, index) => (
                        <li key={index} style={{ backgroundColor: index < quarterCount ? '#142B6F' : '#ccc' }}></li>
                    ))}
                </div>
            </div>
            <div className='list-grid'>
                <ListMoney title="시드머니" money={seedMoney} />
                <ListMoney title="추정자산" money={seedMoney} />
                <ListMoney title="주문 가능 금액" money={seedMoney} />
                <ListMoney title="평가손익" money={seedMoney} />
                <div className='rate'>
                    <p>수익률</p>
                    <div className='percent'>
                        <h3>100%</h3>
                        <h2>100%</h2>
                    </div>
                </div>
            </div>
            <button onClick={addQuarter}>다음 분기</button>
        </section>
    );
}

export default Part3;
