import React from 'react';

const Card = ({ title, content, query }) => {
    return (
        <div className="card-n">
            <p id='h3'>{highlightMatch(title, query)}</p>
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

export default Card;
