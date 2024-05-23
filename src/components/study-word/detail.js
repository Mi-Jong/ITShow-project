import React from 'react';

const Detail = ({ selectedCard, onClose }) => {
    return (
        <div>
            {selectedCard && (
                <div className='detail-container'>
                    <div className='detail'>
                        <button onClick={onClose}>X</button>
                        <div>
                            <h3>{selectedCard.title}</h3>
                            <p>{selectedCard.content}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Detail;
