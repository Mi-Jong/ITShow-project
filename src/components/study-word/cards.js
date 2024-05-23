import React from 'react';
import Card from './card';

const Cards = ({ title, cards, hidden, toggleVisibility, query }) => {
    const handleSaveToLocalStorage = () => {
        if (typeof localStorage === 'undefined') {
            console.error('localStorage is not supported in this browser.');
            return;
        }
        console.log('Saving to localStorage:', title);
        localStorage.setItem('memorizedTitle', title);
    };

    return (
        <div className='cardList' style={{ marginBottom: hidden ? '10px' : '120px' }}>
            <h2>
                {highlightMatch(title, query)}
                <div id='btn_list'>
                    <button className='wordText' onClick={handleSaveToLocalStorage}>암기학습</button>
                    <button onClick={toggleVisibility}>
                        {hidden ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path className="fill-rule" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                                <path className="fill-rule" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
                            </svg>
                        }
                    </button>
                </div>
            </h2>
            <div style={{ width: '80%' }}>
                <div className={`card-container ${hidden ? 'hidden' : ''}`}>
                    {cards.map((card, index) => (
                        <Card key={index} title={card.title} content={card.content} query={query} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const highlightMatch = (text, query) => {
    if (!query) return text;

    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) => 
        part.toLowerCase() === query.toLowerCase() ? <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span> : part
    );
};

export default Cards;
