import React, { useState } from 'react';
import { GoX } from "react-icons/go";

const Card = ({ title, content, query }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
    };

    const handleClickX = () => {
        setIsClicked(false);
    };

    return (
        <>
            <div onClick={handleClick}  className="card-n">
                <p id='h3'>{highlightMatch(title, query)}</p>
            </div>
            {isClicked &&   <ClickCard title={title} content={content} onClickX={handleClickX}/>}
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

function ClickCard({ title, content, onClickX  }) {
    return (
        <section id="clickCard" className='clickCard'>
            <div className='clickCard__inner'>
                <div className='x-cont' >
                    <p>
                        <GoX size="40" onClick={onClickX}/>
                    </p>
                </div>
                <div className='innerText'>
                    <h1>{title}</h1>  
                    <p>{content}</p>  
                </div>
            </div>
        </section>
    );
}

export default Card;
