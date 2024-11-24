import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainContent } from './components/MainContent';

function App() {
  return (
    <div className="min-h-screen bg-[#0F1419] flex flex-col">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;