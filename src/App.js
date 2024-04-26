import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import './App.css';
import FiltersPage from './components/FiltersPage';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/filters" index element={<FiltersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
