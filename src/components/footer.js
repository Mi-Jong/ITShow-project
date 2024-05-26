import React from 'react';
import '../css/style.css';
import styles from '../css/footer.module.css';

function footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__inner}>
                <div className={`${styles.cont} ${styles.cont1}`}>
                    <p className={styles.footerLogo}>2024 GEMMI</p>
                    <p>ⓒ 2024 Gemmi. All rights reserved.</p>
                </div>
                <div className={`${styles.cont} ${styles.cont2}`}>
                    <p><span>개발</span><span className={styles.bold}>이설화</span><span className={styles.bold}>w2232@e-mirim.hs.kr</span></p>
                    <p><span>개발</span><span className={styles.bold}>이가현</span><span className={styles.bold}>w2231@e-mirim.hs.kr</span></p>
                </div>
                <div className={`${styles.cont} ${styles.cont3}`}>
                    <p><span>디자인</span><span className={styles.bold}>서유미</span><span className={styles.bold}>d2327@e-mirim.hs.kr</span></p>
                </div>
            </div>
        </footer>
    );
}

export default footer;
