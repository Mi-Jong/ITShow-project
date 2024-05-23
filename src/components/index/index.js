import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Section from './section';
import Learning from './learning';
import SlideShow from './slideShow';
import StockApp from './stockApp';
import '../../css/index.css';

function App() {
  return (
    <div className='main'>
      <Header />
      <Section />
      <Learning />
      <SlideShow />
      <StockApp />
      <Footer />
    </div>
  );
}

export default App;
