import React from 'react';
import SentencesList from './components/SentencesList';
import './App.css';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div className="App">
      <div className="name">Ruby Werman</div>
      <SentencesList />
      <SocialLinks/>
    </div>
  );
}

export default App;
