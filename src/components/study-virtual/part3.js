import React, { useState, useEffect } from 'react';
import ListMoney from './listMoney';

function Part3({ updateNewsItems, updatePrices, quarterCount, setQuarterCount, seedMoney, updateEstimated, money, updateTotal, updateRate }) {
    const [previousProfitRate, setPreviousProfitRate] = useState(0);
    const [totalProfit, setTotalProfit] = useState(0);
    const [totalInvestment, setTotalInvestment] = useState(seedMoney);

    useEffect(() => {
        updateNewsItems();
    }, [quarterCount]);

    const addQuarter = () => {
        if (quarterCount < 6) {
            setQuarterCount(prevCount => prevCount + 1);
            updatePrices();
            setPreviousProfitRate(updateRate());
            
            // Calculate and update total profit
            const currentProfit = updateTotal();
            setTotalProfit(prevTotalProfit => prevTotalProfit + currentProfit);
            
            // Update total investment
            const currentInvestment = updateEstimated();
            setTotalInvestment(prevTotalInvestment => prevTotalInvestment + currentInvestment);
        } else {
            // 마지막 결과창
        }
    };

    return (
        <section className="part" id="part3">
            <div className='quarter'>
                <p>현재 분기</p>
                <div className='quarter-list'>
                    {[...Array(6)].map((_, index) => (
                        <li key={index} style={{ backgroundColor: index < quarterCount ? '#142B6F' : '#ccc' }}></li>
                    ))}
                </div>
            </div>
            <div className='list-grid'>
                <ListMoney title="시드머니" money={seedMoney} />
                <ListMoney title="추정자산" money={updateEstimated()} /> {/* call the function here */}
                <ListMoney title="주문 가능 금액" money={money} />
                <ListMoney title="평가손익" money={updateTotal()} />
                <div className='rate'>
                    <p>수익률</p>
                    <div className='percent'>
                        <h3>{previousProfitRate.toFixed(2)}%</h3>
                        <h2>{updateRate().toFixed(2)}%</h2>
                    </div>
                </div>
            </div>
            <button onClick={addQuarter}>다음 분기</button>
        </section>
    );
}

export default Part3;
