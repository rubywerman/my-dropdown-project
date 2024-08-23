import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import './App.css';
import FiltersPage from './components/FiltersPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filters" element={<FiltersPage />} />
      </Routes>
    </>
  );
}

export default App;
