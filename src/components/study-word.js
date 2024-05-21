import React, { useState, useEffect } from 'react';
import '../css/style.css';
import Header from './header';
import Footer from './footer';
import '../css/study-word.css';
import wordData from '../Data/word.json';

function Section() {
    return (
        <div className='section'>
            <div className='section-text'>
                <p id='h3'>글씨</p>
                <p id='h1'>쉽게 익히는 수학단어</p>
                <p id='h2'>글씨글씨글씨글씨글씨글씨글씨글씨글씨글씨글씨글씨글씨</p>
            </div>
            <div className='img'></div>
        </div>
    );
}

function Game() {
    return (
        <div className='game'>
            <p>대충 게임하러 가자는 말</p>
            <button>주식 단어 게임</button>
        </div>
    );
}

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    useEffect(() => {
        const handler = setTimeout(() => {
            onSearch(query);
        }, 1000);

        return () => {
            clearTimeout(handler);
        };
    }, [query, onSearch]);

    return (
        <div className='search'>
            <input
                placeholder='단어를 검색해주세요'
                value={query}
                onChange={handleChange}
            />
        </div>
    );
};

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

const Cards = ({ title, cards, hidden, toggleVisibility, query }) => {
    return (
        <div className='cardList' style={{ marginBottom: hidden ? '10px' : '120px' }}>
            <h2>
                {highlightMatch(title, query)}
                <div id='btn_list'>
                    <button className='wordText'>암기학습</button>
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

const Card = ({ title, content, query }) => {
    return (
        <div className="card">
            <p id='h3'>{highlightMatch(title, query)}</p>
        </div>
    );
};

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

function App() {
    const [selectedCard, setSelectedCard] = useState(null);
    const [filteredTitles, setFilteredTitles] = useState(wordData);
    const [query, setQuery] = useState('');

    const handleSearch = (query) => {
        setQuery(query.toLowerCase());
        if (query === '') {
            setFilteredTitles(wordData);
        } else {
            const filtered = wordData.filter((titleObj) =>
                titleObj.title.toLowerCase().includes(query.toLowerCase()) ||
                titleObj.cards.some((card) =>
                    card.title.toLowerCase().includes(query.toLowerCase()) ||
                    card.content.toLowerCase().includes(query.toLowerCase())
                )
            );
            setFilteredTitles(filtered);
        }
    };

    useEffect(() => {
        document.title = "GEMMI - 단어모음집";
    }, []);

    return (
        <div className='body'>
            <Section />
            <Game />
            <Search onSearch={handleSearch} />
            <TitleList titles={filteredTitles} selectedCard={selectedCard} query={query} />
        </div>
    );
}

const highlightMatch = (text, query) => {
    if (!query) return text;

    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) => 
        part.toLowerCase() === query.toLowerCase() ? <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span> : part
    );
};

export default App;