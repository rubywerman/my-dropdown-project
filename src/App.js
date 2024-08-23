import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from './components/Home';
import './App.css';
import FiltersPage from './components/FiltersPage';
import Layout from './components/Layout';

function RedirectToProperRoute() {
  const location = useLocation();
  useEffect(() => {
    const path = window.location.search.replace('?', '');
    if (path && path !== location.pathname) {
      window.history.replaceState({}, '', path);
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <RedirectToProperRoute />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/filters" element={<FiltersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
