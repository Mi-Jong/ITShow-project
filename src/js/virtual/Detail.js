import React from 'react';

function Detail({ isNextVisible, toggleNextVisibility }) {
    return (
        <>
            {isNextVisible && (
                <div className="detail">
                    <div className="paper">
                        <div className="title">결과화면</div>
                        <div className="result"></div>
                        <div className="next">
                            <button id="next-btn" onClick={toggleNextVisibility}>다음화면</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Detail;
