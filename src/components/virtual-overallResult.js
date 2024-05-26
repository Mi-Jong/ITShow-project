import React, { useState } from 'react';
import '../css/style.css';
import styles from '../css/virtual-overallResult.module.css';
import { GoX } from "react-icons/go";

function VirtualOverallResult(props) {
    return (
        <section id='VirtualOverallResult' className={styles.VirtualOverallResult}>
            <div className={styles['VirtualOverallResult-inner']}>
                <div className={styles['inner-header']}>
                    <p>전체 결과</p>
                    <GoX style={{paddingRight:"20px"}}/>
                </div>
                <div className={styles['inner-cont']}>
                    <table className={styles['day-table']}>
                        <tr>
                            <th scope="col">1일차 내용</th>
                            <th scope="col">2일차 내용</th>
                            <th scope="col">3일차 내용</th>
                            <th scope="col">4일차 내용</th>
                        </tr>
                        <tr>
                            <td>-10%</td>
                            <td>-10%</td>
                            <td>-10%</td>
                            <td>-10%</td>
                        </tr>
                    </table>
                    <table className={styles['result-table']}>
                        <tr>
                            <th scope="col">총 수익</th>
                            <th scope="col">총평</th>
                        </tr>
                        <tr>
                            <td>20%</td>
                            <td>오 주식 좀 하시는데요?</td>
                        </tr>
                    </table>
                    <button className={styles.nextButton}>
                        다음으로
                    </button>
                </div>
            </div>
        </section>
    );
}

export default VirtualOverallResult;