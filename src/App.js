import React from 'react';
import SentencesList from './components/SentencesList';
import './App.css';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div className="App">
      <div className="top-header">
      <div className="name">Ruby Werman</div>
      <SocialLinks/>
      </div>
      <SentencesList />
    </div>
  );
}

export default App;
