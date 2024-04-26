import React from 'react';
import SentencesList from './SentencesList';
import '../App.css';
import SocialLinks from './SocialLinks';

function Home() {
  return (
    <div className="Home">
      <div className="top-header">
      <div className="name">Ruby Werman</div>
      <SocialLinks/>
      </div>
      <SentencesList />
    </div>
  );
}

export default Home;
