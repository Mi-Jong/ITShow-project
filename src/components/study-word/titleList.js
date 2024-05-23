import React, { useState } from 'react';
import Cards from './cards';

const TitleList = ({ titles, selectedCard, query }) => {
    const [hiddenTitles, setHiddenTitles] = useState([]);

    const toggleTitleVisibility = (index) => {
        if (hiddenTitles.includes(index)) {
            setHiddenTitles(hiddenTitles.filter((titleIndex) => titleIndex !== index));
        } else {
            setHiddenTitles([...hiddenTitles, index]);
        }
    };

    if (titles.length === 0) {
        return <p className='noWord'>찾으시는 단어가 없습니다</p>;
    }

    return (
        <div className='cardTitleList'>
            {titles.map((titleObj, index) => (
                <Cards
                    key={index}
                    title={titleObj.title}
                    cards={titleObj.cards}
                    hidden={hiddenTitles.includes(index)}
                    toggleVisibility={() => toggleTitleVisibility(index)}
                    selectedCard={selectedCard}
                    query={query}
                />
            ))}
        </div>
    );
};

export default TitleList;
