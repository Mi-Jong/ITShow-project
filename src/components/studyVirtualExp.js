import React, { useState } from 'react';
import '../css/style.css';
import styles from '../css/studyVirtualExp.module.css';
import { IoExitOutline } from "react-icons/io5";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import balanceImg from '../img/exp/balanceImg.png';
import newsImg from '../img/exp/newsImg.png';
import resultImg from '../img/exp/resultImg.png';
import roundImg from '../img/exp/roundImg.png';
import sellAndBuyImg from '../img/exp/sellAndBuyImg.png';

function StudyVirtualExp({ onClose }) {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const cards = [
        {
            img1: balanceImg,
            title1: '초기자산',
            text1: '플레이어는 초기 자산을 가지고 시작합니다.',
            img2: roundImg,
            title2: '거래 라운드',
            text2: '각 라운드마다 플레이어는 매수 또는 매도를 결정합니다.',
        },
        {
            img1: sellAndBuyImg,
            title1: '매수 및 매도',
            text1: '플레이어는 전략에 따라 자산을 매수하거나 매도할 수 있습니다. \n [종목명]을 클릭하고 [매수] 또는 [매도] 버튼을 눌러 원하는 종목을 매수 및 매도합니다',
            img2: '',
            title2: '',
            text2: '',
        },
        {
            img1: newsImg,
            title1: '뉴스',
            text1: '시장 뉴스가 주기적으로 제공되어 플레이어의 결정을 도울 수 있습니다.',
            img2: resultImg,
            title2: '결과',
            text2: '라운드가 끝나면 결과가 집계되고 승자가 결정됩니다.',
        },
    ];

    const handleNext = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const handlePrev = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    const { img1, title1, text1, img2, title2, text2 } = cards[currentCardIndex];

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
                        <p><BsChevronLeft size="40" onClick={handlePrev} /></p>
                        <div className={styles.card}>
                           <table>
                               <tr>
                                    <th><img src={img1} alt={title1} /></th>
                                    <td>
                                        <h2>{title1}</h2>
                                        <p style={{ whiteSpace: 'pre-line' }}>{text1}</p>
                                    </td>
                               </tr>
                               <tr>
                                    <th><img src={img2} alt={title2} /></th>
                                    <td>
                                        {title2 && <h2>{title2}</h2>}
                                        {text2 && <p>{text2}</p>}
                                    </td>
                               </tr>
                           </table>
                        </div>
                        <p><BsChevronRight size="40" onClick={handleNext} /></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudyVirtualExp;
