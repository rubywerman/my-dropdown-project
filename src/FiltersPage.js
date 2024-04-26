import React from 'react';
import SentencesList from './components/SentencesList';
import './App.css';
import SocialLinks from './components/SocialLinks';

function FiltersPage() {
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

export default FiltersPage;
