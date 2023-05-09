import React from 'react';
import { AppContextProvider } from './context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/Home';
import About from './pages/About';
import Accomodation from './pages/Accomodation';
import Error from './pages/Error';
import GlobalStyle from './style';

export default function Router() {
  return (
    <BrowserRouter basename="/">
      <AppContextProvider>
        <GlobalStyle>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/accomodation/:id" element={<Accomodation />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Layout>
        </GlobalStyle>
      </AppContextProvider>
    </BrowserRouter>
  );
}