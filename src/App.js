import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';

import GlobalStyle from './styles/global';
import DefaultLayout from './pages/_layouts/default';

function App() {
  return (
    <Router history={history}>
      <DefaultLayout>
        <Routes />
        <GlobalStyle />
      </DefaultLayout>
    </Router>
  );
}

export default App;
