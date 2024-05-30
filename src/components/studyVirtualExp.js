import React from 'react';
import '../css/style.css';
import styles from '../css/studyVirtualExp.module.css'; // CSS 모듈 import
import { IoExitOutline } from "react-icons/io5";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

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
                            s
                        </div>
                        <p><BsChevronRight size="40" /></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudyVirtualExp;
