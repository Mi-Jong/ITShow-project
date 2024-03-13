// import React from 'react';
import '../css/style.css';
import Header from './header';
import '../css/study-virtual.css';

function App() {
    return (
        <div>
            
            <Header />

            <main>
                <section className="part" id="part1">
                    <div className="logo"></div>
                    <div className="step"></div>
                    <div className="info"></div>
                </section>

                <section className="part" id="part2">
                    <div className="graph"></div>
                    <div className="button-line"></div>
                    <div className="view" id="table"></div>
                    {/* <div className="view hidden" id="news"></div> */}
                </section>

                <section className="part" id="part3">
                    <div className="interact"></div>
                    <div className="margin"></div>
                    <div className="next"></div>
                </section>
            </main>

            <div className="detail" id="hidden">
                <div className="paper"></div>
            </div>
        </div>
    );
}

export default App;
