import React, { useState } from 'react';
import '../../css/style.css';
import Header from '.././header';
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';
import Detail from './Detail';
import '../css/study-virtual.css';

function App() {
    const [isNextVisible, setNextVisibility] = useState(false);
    const [showTable, setShowTable] = useState(true);

    const toggleNextVisibility = () => {
        setNextVisibility(prevVisibility => !prevVisibility);
    };

    const toggleView = (table) => {
        setShowTable(table);
    };

    return (
        <>
            <Header />

            <main>
                <Part1 toggleNext={toggleNextVisibility} />
                <Part2 toggleView={toggleView} showTable={showTable} />
                <Part3 />
                <Detail isNextVisible={isNextVisible} toggleNextVisibility={toggleNextVisibility} />
            </main>
        </>
    );
}

export default App;
