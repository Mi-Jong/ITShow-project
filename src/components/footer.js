import React from 'react';
import '../css/globals.css';
import '../css/footer.css';

function footer() {
    return (
        <footer>
            <div className='footer__inner'>
                <div className='cont cont1'>
                    <p className='footerLogo'> 2024 GEMMI</p>
                    <p>ⓒ 2024 Gemmi. All rights reserved.</p>
                </div>
                <div className='cont cont2'>
                    <p><span>개발</span><span className='bold'>이설화</span><span className='bold'>w2232@e-mirim.hs.kr</span></p>
                    <p><span>개발</span><span className='bold'>이가현</span><span className='bold'>w2231@e-mirim.hs.kr</span></p>
                </div>
                <div className='cont cont3'>
                <p><span>디자인</span><span className='bold'>서유미</span><span className='bold'>d2327@e-mirim.hs.kr</span></p>
                </div>
            </div>
        </footer>
    );
}

export default footer;
