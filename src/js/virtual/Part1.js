import React from 'react';

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

export default Part1;