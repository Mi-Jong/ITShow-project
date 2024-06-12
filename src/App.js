import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";

import StudyVirtual from './components/study-virtual/index';
import StudyGame from './components/study-game.js'; 
import StudyWord from './components/study-word/index.js'; 
import StudyWordDetail from './components/study-word-detail'
import VirtualOverallResult from './components/virtual-overallResult.js';
import Index from './components/index.js'; 
import ScrollToTop from './components/ScrollToTop'; 

import VirtualThisResult from './components/virtual-thisResult.js'
import Ranking from './components/ranking.js'
import SellAndBuy  from './components/SellAndBuy.js' 
import Login from './components/login'; 
import StudyVirtualExp from './components/studyVirtualExp.js'; 
import TooltipHeader from './components/TooltipHeader';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/StudyWord"  element={<StudyWord />}  />
        <Route path="/StudyVirtual"  element={<StudyVirtual />}  />
        <Route path="/StudyWordDetail"  element={<StudyWordDetail />}  />
        <Route path="/StudyGame"  element={<StudyGame />}  />
        <Route path="/StudyVirtualExp"  element={<StudyVirtualExp />}  />
        <Route path="/Ranking"  element={<Ranking />}  />
        <Route path="/VirtualOverallResult"  element={<VirtualOverallResult />}  />
        <Route path="/TooltipHeader"  element={<TooltipHeader />}  />
        <Route path="/Login"  element={<Login />}  />
         {/* 툴팁을 사용할 페이지에 해당하는 라우트 추가 */}
         <Route path="/StudyWithTooltip" element={<StudyVirtual />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;