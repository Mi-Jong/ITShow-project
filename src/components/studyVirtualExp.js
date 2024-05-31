import React from 'react';
import '../css/style.css';
import styles from '../css/studyVirtualExp.module.css'; // CSS 모듈 import
import { IoExitOutline } from "react-icons/io5";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import balanceImg from '../img/exp/balanceImg.png';
import newsImg from '../img/exp/newsImg.png';
import resultImg from '../img/exp/resultImg.png';
import roundImg from '../img/exp/roundImg.png';
import sellAndBuyImg from '../img/exp/sellAndBuyImg.png';

function StudyVirtualExp({ onClose }) {
    return (
        <div className={styles.studyVirtualExp}>
            <div className={styles.studyVirtualExp__inner}>
                <div className={styles.studyVirtualExp__header}>
                    <div className={styles.header__inner}>
                        <p>
                            <IoExitOutline size="1.3em" onClick={onClose} />
                        </p>
                    </div>
                </div>
                <div className={styles.studyVirtualExp__cont}>
                    <div className={styles.card_inner}>
                        <p><BsChevronLeft size="40" /></p>
                        <div className={styles.card}>
                           <div className={styles.card1}>
                                <div className={styles.cardImg}>
                                    <img src= {balanceImg}></img>
                                </div>
                                <div className={styles.expText}>
                                    <h3>초기자산</h3>
                                    플레이어는 동일한 초기 자산을 가지고 시작합니다.
                                </div>
                           </div>
                           <div className={styles.card1}>
                                <div className={styles.cardImg}>
                                    <img src= {roundImg}></img>
                                </div>
                                <div className={styles.expText}>
                                    <h3>거래 라운드</h3>
                                    각 라운드마다 플레이어는 매수 또는 매도를 결정합니다.
                                </div>
                           </div>
                        </div>
                        <p><BsChevronRight size="40" /></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudyVirtualExp;
