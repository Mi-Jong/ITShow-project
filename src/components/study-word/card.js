import React, { useState, useContext } from 'react';
import { GoX } from "react-icons/go";
import { SelectedCardContext } from './SelectedCardContext';

const Card = ({ title, content, query }) => {
    const { setSelectedCard } = useContext(SelectedCardContext);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setSelectedCard({ title, content });
    };

    const handleClickX = () => {
        setIsClicked(false);
        setSelectedCard(null);
    };

    return (
        <>
            <div onClick={handleClick} className="card-n">
                <p id='h3'>{highlightMatch(title, query)}</p>
            </div>
        </>
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
