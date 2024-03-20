import React, { useState } from 'react';
import Header from '../header';
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';
import Detail from './Detail';
import '../../css/style.css';
import '../../css/virtual/study-virtual.css';

function App() {
    const [isNextVisible, setNextVisibility] = useState(false);

    const toggleNextVisibility = () => {
        setNextVisibility(prevVisibility => !prevVisibility);
    };

    return (
        <>
            <Header />
            <main>
                <Part1 toggleNext={toggleNextVisibility} />
                <Part2 />
                <Part3 />
                <Detail isNextVisible={isNextVisible} toggleNextVisibility={toggleNextVisibility} />
            </main>
        </>
    );
}

export default App;
