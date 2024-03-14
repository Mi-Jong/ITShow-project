import React, { useState } from 'react';
import '../css/style.css';
import Header from './header';
import '../css/study-virtual.css';

function App() {
    const [nextHidden, setNextHidden] = useState(true);
    const [line_table, setLine_table] = useState(false);
    const [line_view, setLine_view] = useState(true);

    const toggleNextHidden = () => {
        setNextHidden(!nextHidden);
    };
    const toggleTableHidden = () => {
        setLine_table(false);
        setLine_view(true);
    };
    const toggleViewHidden = () => {
        setLine_table(true);
        setLine_view(false);
    };

    return (
        <div>
            <Header />

            <main>
                <section className="part" id="part1">
                    <div className="logo"></div>
                    <div className="step">
                        <button onClick={toggleNextHidden}></button>
                    </div>
                    <div className="info"></div>
                </section>

                <section className="part" id="part2">
                    <div className="graph"></div>
                    <div className="button-line">
                        <button onClick={toggleTableHidden}>표</button>
                        <button onClick={toggleViewHidden}>뉴스</button>
                    </div>
                    <div className="view" id={line_table ? 'hidden' : 'table'}></div>
                    <div className="view" id={line_view ? 'hidden' : 'news'}></div>
                </section>

                <section className="part" id="part3">
                    <div className="interact"></div>
                    <div className="margin"></div>
                    <div className="next"></div>
                </section>
            </main>

            <div className={`detail`} id={nextHidden ? 'hidden' : ''}>
                <div className="paper">
                    <div className='title'>결과화면</div>
                    <div className='result'></div>
                    <div className='next'>
                        <button id='next-btn' onClick={toggleNextHidden}>다음화면</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;
