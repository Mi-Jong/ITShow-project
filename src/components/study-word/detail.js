import React, { useContext } from 'react';
import { SelectedCardContext } from './SelectedCardContext';

const Detail = () => {
    const { selectedCard, setSelectedCard } = useContext(SelectedCardContext);

    if (!selectedCard) {
        return null;
    }

    return (
        <div className='detail-container'>
            <div className='detail'>
                <button onClick={() => setSelectedCard(null)}>X</button>
                <div>
                    <h3>{selectedCard.title}</h3>
                    <p>{selectedCard.content}</p>
                </div>
            </div>
        </div>
    );
};

export default Detail;
