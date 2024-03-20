import React, { useState } from 'react';
import '../../css/virtual/part2.css';

function Part2() {
    const [isTableShown, setIsTableShown] = useState(true);

    return (
        <section className="part" id="part2">
            <div className="graph"></div>
            <div className="button-line">
                <button onClick={() => setIsTableShown(true)}>표</button>
                <button onClick={() => setIsTableShown(false)}>뉴스</button>
            </div>
            <div id="view" className={isTableShown ? 'table' : 'news'}></div>
        </section>
    );
}

export default Part2;
