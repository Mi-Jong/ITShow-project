import React from 'react';
import styles from '../css/virtual-thisResult.module.css';
import { GoX } from "react-icons/go";
import FinalResult from './virtual-overallResult'; // Import the new component

function VirtualThisResult(props) {
    let totalReview = '';
    if (totalProfitRate > 0) {
        totalReview = '오 주식 좀 잘 이해하셨네요';
    } else if (totalProfitRate < 0) {
        totalReview = '조금 더 공부를 해보아요!';
    } else {
        totalReview = '우리 조금 더 머릴 써보아요';
    }

    const addQuarter = () => {
        if (props.quarterCount < 6) {
            const currentRate = props.updateRate();
            props.setQuarterlyProfitRates(prevRates => [...prevRates, currentRate]);
            props.setQuarterCount(prevCount => prevCount + 1);
            props.setPreviousProfitRate(currentRate);
            
            const currentProfit = props.updateTotal();
            props.setTotalProfit(prevTotalProfit => prevTotalProfit + currentProfit);
            
            const currentInvestment = props.updateEstimated();
            props.setTotalInvestment(prevTotalInvestment => prevTotalInvestment + currentInvestment);
        }
    };

    if (props.quarterCount >= 6) {
        return <FinalResult quarterlyProfitRates={props.quarterlyProfitRates} />;
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
