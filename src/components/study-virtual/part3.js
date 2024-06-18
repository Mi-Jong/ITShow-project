import React, { useState, useEffect } from 'react';
import ListMoney from './listMoney';

function Part3({ updateNewsItems, handleResult, quarterCount, seedMoney, updateEstimated, money, updateTotal, updateRate }) {
    const [previousProfitRate, setPreviousProfitRate] = useState(0);
    const [totalProfit, setTotalProfit] = useState(0);
    const [totalInvestment, setTotalInvestment] = useState(seedMoney);

    useEffect(() => {
        updateNewsItems();
    }, [quarterCount]);

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
                    <ListMoney title="시드머니" desc={`시드머니란 초기 자본입니다. \n처음 가진 돈의 금액을 말합니다.`} money={seedMoney} />
                    <ListMoney title="추정자산" desc={`추정자산이란 결과로 예상되는 자산의 총액을 말합니다. \n특정 기간 동안의 예상 매출이나 투자 수익 등을 포함할 수 있습니다.`} money={updateEstimated()} />
                    <ListMoney title="주문 가능 금액" desc={`주문 가능이란 자금 상황에서 특정 금액 이내로 주문할 수 있는 금액을 말합니다. \n현재 가지고 있는 금액이라고 생각합시다.`} money={money} />
                    <ListMoney title="평가손익" desc={`평가손익이란 자산의 가치 변동에 따른 수익을 말합니다. \n특정 주식의 가격이 오르거나 내리면 이익이나 손실이 발생합니다.`} money={updateTotal()} />
                <div className='rate'>
                    <p>수익률</p>
                    <div className='percent'>
                        <h3>{previousProfitRate.toFixed(2)}%</h3>
                        <h2>{updateRate().toFixed(2)}%</h2>
                    </div>
                </div>
            </div>
            <button onClick={() => { handleResult(); }}>다음 분기</button>
        </section>
    );
}

export default Part3;
