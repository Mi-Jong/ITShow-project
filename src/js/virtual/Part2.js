import React from 'react';

function Part2({ toggleView }) {
    return (
        <section className="part" id="part2">
            <div className="graph"></div>
            <div className="button-line">
                <button onClick={() => toggleView(true)}>표</button>
                <button onClick={() => toggleView(false)}>뉴스</button>
            </div>
            <div className={`view ${showTable ? 'table' : 'news'}`}></div>
        </section>
    );
}

export default Part2;