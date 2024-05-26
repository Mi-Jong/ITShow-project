import React from 'react';
import styles from '../css/virtual-thisResult.module.css';
import { GoX } from "react-icons/go";

function VirtualThisResult(props) {
    return (
        <section id='VirtualThisResult' className={styles.VirtualThisResult}>
            <div className={styles['result-inner']}>
                <div className={styles['inner-header']}>
                    <p>결과</p>
                    <GoX style={{paddingRight:"20px"}}/>
                </div>
                <div className={styles['inner-cont']}>
                    <div className={styles.cont}>
                        <div className={styles.sub}>
                            <div className={styles['sub-title']}>
                                이번 분기 내용
                            </div>
                            <div className={styles['sub-cont']}>
                                <ul>
                                    <li>수익 : <span className={styles.profit}>dd</span></li>
                                    <li>잔고 : <span className={styles.balance}>dd</span></li>
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
                    <button className={styles.nextButton}>
                        다음으로
                    </button>
                </div>
            </div>
        </section>
    );
}

export default VirtualThisResult;
