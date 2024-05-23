import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import HomeView from "./HomeView";

import StudyVirtual from './components/study-virtual/index.js';
// import StudyGame from './components/study-game.js'; 
import StudyWord from './components/study-word.js'; 
import StudyWordDetail from './components/study-word-detail.js';
import Index from './components/index.js'; 
// import VirtualOverallResult from './components/virtual-overallResult.js';
// import VirtualThisResult from './components/virtual-thisResult.js'
// import Ranking from './components/ranking.js'
// import SellAndBuy  from './components/SellAndBuy.js' 


function App() {
  return (
       <BrowserRouter>
           <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/studyWord" element={<StudyWord />} />
              <Route path="/studyWordDetail"  element={<StudyWordDetail />}  />
              <Route path="/studyVirtual"  element={<StudyVirtual />}  />
           </Routes>
       </BrowserRouter>
    // <StudyWord/>

  );
}


export default App;
