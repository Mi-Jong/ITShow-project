import React, { useState, useEffect } from 'react';
import '../css/study-word.css';
import Header from './header';
import Footer from './footer';
import '../css/study-word.css';
import wordData from '../Data/word.json';


function App() {
    return (
        <div>

            <Header />

            <Footer />

        </div>
    );
}


function App() {

    useEffect(() => {
        document.title = "GEMMI - 단어모음집";
    }, []);

    return (
        <div >
            <Header />
            <Footer />
        </div>
    );
}

export default App;