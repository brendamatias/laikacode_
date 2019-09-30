import React from 'react';

import Header from './components/Header';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './components/Footer';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Contact />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
