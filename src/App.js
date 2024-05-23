import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";

import StudyVirtual from './components/study-virtual/index';
import StudyGame from './components/study-game.js'; 
import StudyWord from './components/study-word/index.js'; 
import StudyWordDetail from './components/study-word-detail'
import Index from './components/index.js'; 
import VirtualOverallResult from './components/virtual-overallResult.js';
// import VirtualThisResult from './components/virtual-thisResult.js'
// import Ranking from './components/ranking.js'
// import SellAndBuy  from './components/SellAndBuy.js' 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/StudyWord"  element={<StudyWord />}  />
        <Route path="/StudyVirtual"  element={<StudyVirtual />}  />
        <Route path="/StudyWordDetail"  element={<StudyWordDetail />}  />
        <Route path="/StudyGame"  element={<StudyGame />}  />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
