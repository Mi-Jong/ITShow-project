import React, { useState } from 'react';
import Header from './header';
import '../css/style.css';
import '../css/study-virtual.css';

function Part1({ toggleNext }) {
    return (
        <section className="part" id="part1">
            <div className="logo"></div>
            <div className="step">
                <button onClick={toggleNext}></button>
            </div>
            <div className="info"></div>
        </section>
    );
}
function Part2({isTableShown, setIsTableShown}) {
    return (
        <section className="part" id="part2">
            <div className="graph"></div>
            <div className="button-line">
                <button onClick={() => setIsTableShown(true)}>표</button>
                <button onClick={() => setIsTableShown(false)}>뉴스</button>
            </div>
            <div className="view" id={isTableShown ? 'table' : ''}></div>
            <div className="view" id={isTableShown ? '' : 'news'}></div>
        </section>
    );
}

function Part3() {
    return (
        <section className="part" id="part3">
            <div className="interact"></div>
            <div className="margin"></div>
            <div className="next"></div>
        </section>
    );
}

function Detail({ isNextVisible, toggleNextVisibility, setIsTableShown }) {
    return (
        <>
            {isNextVisible && (
                <div className="detail">
                    <div className="paper">
                        <div className="title">결과화면</div>
                        <div className="result"></div>
                        <div className="next">
                            <button id="next-btn" onClick={() =>{ toggleNextVisibility(false); setIsTableShown(true);}}>다음화면</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}


function App() {
    const [isNextVisible, setNextVisibility] = useState(false);
    const [isTableShown, setIsTableShown] = useState(true);

    const toggleNextVisibility = () => {
        setNextVisibility(prevVisibility => !prevVisibility);
    };

    return (
        <>
            <Header />
            <main>
                <Part1 toggleNext={toggleNextVisibility} />
                <Part2 isTableShown={isTableShown} setIsTableShown={setIsTableShown} />
                <Part3 />
                <Detail isNextVisible={isNextVisible} toggleNextVisibility={toggleNextVisibility} setIsTableShown={setIsTableShown} />
            </main>
        </>
    );
}


export default App;
