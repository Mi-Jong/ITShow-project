import React from 'react';
import '../css/style.css';
import styles from '../css/virtual-overallResult.module.css';
import { GoX } from "react-icons/go";

function FinalResult({ quarterlyProfitRates }) {
    const totalProfitRate = quarterlyProfitRates.reduce((acc, rate) => acc + rate, 0);
    let totalReview = '';

    if (totalProfitRate > 0) {
        totalReview = '오 주식 좀 하시는데요?';
    } else if (totalProfitRate < 0) {
        totalReview = '우~ 루저';
    } else {
        totalReview = 'ㅋ 원금은 안잃었네요 ㅋ';
    }

    const handleNext = () => {
        window.location.href = '/Login?Virtual';
    };

    const getColorForTotalProfitRate = () => {
        if (totalProfitRate > 0) {
            return 'red';
        } else if (totalProfitRate < 0) {
            return 'skyblue';
        } else {
            return 'black';
        }
    };

    return (
        <section id='VirtualOverallResult' className={styles.VirtualOverallResult}>
            <div className={styles['VirtualOverallResult-inner']}>
                <div className={styles['inner-header']}>
                    <p>전체 결과</p>
                    <GoX style={{paddingRight:"20px"}}/>
                </div>
                <div className={styles['inner-cont']}>
                    <table className={styles['day-table']}>
                        <thead>
                            <tr>
                                {quarterlyProfitRates.map((_, index) => (
                                    <th key={index} scope="col">{index + 1}일차 내용</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {quarterlyProfitRates.map((rate, index) => (
                                    <td key={index}>{rate.toFixed(2)}%</td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                    <table className={styles['result-table']}>
                        <thead>
                            <tr>
                                <th scope="col">총 수익</th>
                                <th scope="col">총평</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td 
                                    style={{
                                        color: getColorForTotalProfitRate(),
                                        fontSize: '40px'
                                    }}
                                >
                                    {totalProfitRate.toFixed(2)}%
                                </td>
                                <td>{totalReview}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className={styles.nextButton} onClick={handleNext}>
                        다음으로
                    </button>
                </div>
            </div>
        </section>
    );
}

export default FinalResult;
