// src/App.js
import React from 'react';
import SentencesList from './components/SentencesList';
import './App.css';

function App() {
  return (
    <div className="App">
      <img className="ruby" src={'/rubywerman.png'}/>
      <SentencesList />
    </div>
  );
}

export default App;
