import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';

import Header from './components/Header';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './components/Footer';

import GlobalStyle from './styles/global';
import DefaultLayout from './pages/_layouts/default';

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
