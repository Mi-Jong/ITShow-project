import React from 'react';
import styles from '../css/virtual-thisResult.module.css';
import { GoX } from "react-icons/go";
import FinalResult from './virtual-overallResult'; // Assuming this is the correct path to FinalResult component

function VirtualThisResult(props) {
    let totalProfitRate = props.updateRate().toFixed(2);

    if (props.updateRate().toFixed(2) !== 0) {
    } else {
        totalProfitRate = 0; 
    }

    let totalReview = '';

    if (totalProfitRate > 0) {
        totalReview = '오 주식 좀 하시는데요?';
    } else if (totalProfitRate < 0) {
        totalReview = '우~ 루저';
    } else {
        totalReview = 'ㅋ 원금은 안잃었네요 ㅋ';
    }

    const addQuarter = () => {
            const currentRate = props.updateRate();
            props.setQuarterlyProfitRates(prevRates => [...prevRates, currentRate]);
            props.setQuarterCount(prevCount => prevCount + 1);
            props.setPreviousProfitRate(currentRate);
            
            const currentProfit = props.updateTotal();
            props.setTotalProfit(prevTotalProfit => prevTotalProfit + currentProfit);
            
            const currentInvestment = props.updateEstimated();
            props.setTotalInvestment(prevTotalInvestment => prevTotalInvestment + currentInvestment);
    };

    if (props.quarterCount >= 6) {
        return <FinalResult quarterlyProfitRates={props.quarterlyProfitRates} totalProfitRate={props.updateRate().toFixed(2)}/>;
    }

    return (
        <section id='VirtualThisResult' className={styles.VirtualThisResult}>
            <div className={styles['result-inner']}>
                <div className={styles['inner-header']}>
                    <p>결과</p>
                    <GoX size="25" style={{ paddingRight: "20px" }} />
                </div>
                <div className={styles['inner-cont']}>
                    <div className={styles.cont}>
                        <div className={styles.sub}>
                            <div className={styles['sub-title']}>
                                이번 분기 내용
                            </div>
                            <div className={styles['sub-cont']}>
                                <ul>
                                    <li>수익 : <span className={styles.profit}>{props.updateRate().toFixed(2)}%</span></li>
                                    <li>잔고 : <span className={styles.balance}>{props.money}원</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.assess}>
                            <div className={styles['assess-title']}>
                                이번 분기 한줄평
                            </div>
                            <div className={styles['assess-cont']}>
                                {totalReview}
                            </div>
                        </div>
                    </div>
                    <button className={styles.nextButton} onClick={() => { props.handleResult(); addQuarter(); }}>
                        다음으로
                    </button>
                </div>
            </div>
        </section>
    );
}

export default VirtualThisResult;
