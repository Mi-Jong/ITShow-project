import React from 'react';
import styles from '../css/virtual-thisResult.module.css';
import { GoX } from "react-icons/go";
import FinalResult from './virtual-overallResult'; // Import the new component

function VirtualThisResult(props) {
    const addQuarter = () => {
        if (props.quarterCount < 6) {
            props.setQuarterCount(prevCount => prevCount + 1);
            props.updatePrices();
            props.setPreviousProfitRate(props.updateRate());
            
            const currentProfit = props.updateTotal();
            props.setTotalProfit(prevTotalProfit => prevTotalProfit + currentProfit);
            
            const currentInvestment = props.updateEstimated();
            props.setTotalInvestment(prevTotalInvestment => prevTotalInvestment + currentInvestment);
        } else {
            // Do nothing or handle final result if needed
        }
    };

    if (props.quarterCount >= 6) {
        return <FinalResult />;
    }

    return (
        <section id='VirtualThisResult' className={styles.VirtualThisResult}>
            <div className={styles['result-inner']}>
                <div className={styles['inner-header']}>
                    <p>결과</p>
                    <GoX style={{ paddingRight: "20px" }} />
                </div>
                <div className={styles['inner-cont']}>
                    <div className={styles.cont}>
                        <div className={styles.sub}>
                            <div className={styles['sub-title']}>
                                이번 분기 내용
                            </div>
                            <div className={styles['sub-cont']}>
                                <ul>
                                    <li>수익 : <span className={styles.profit}>{props.updateRate().toFixed(2)}</span></li>
                                    <li>잔고 : <span className={styles.balance}>{props.money}</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.assess}>
                            <div className={styles['assess-title']}>
                                이번 분기 한줄평
                            </div>
                            <div className={styles['assess-cont']}>
                                정말 아쉬워요 다음번 뉴스를 잘 확인합시다
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
