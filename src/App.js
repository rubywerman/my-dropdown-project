import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import './App.css';
import FiltersPage from './components/FiltersPage';
import Layout from './components/Layout';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/filters" element={<FiltersPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
