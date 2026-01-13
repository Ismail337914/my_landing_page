import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Examples from './components/Examples';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <Examples />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
