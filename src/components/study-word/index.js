import React, { useState, useEffect } from 'react';
import '../../css/style.css';
import Header from '../header';
import Footer from '../footer';
import '../../css/study-word.css';
import wordData from '../../Data/word.json';
import Section from './section';
import Game from './game';
import Search from './search';
import TitleList from './titleList';
import Detail from './detail';

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
            <Header />
            <Section />
            <Game />
            <Search onSearch={handleSearch} />
            <TitleList titles={filteredTitles} selectedCard={selectedCard} query={query} />
            <Detail selectedCard={selectedCard} onClose={() => setSelectedCard(null)} />
            <Footer />
        </div>
    );
}

export default App;
