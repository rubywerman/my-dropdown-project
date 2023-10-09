// components/Sentence.js
import React from 'react';
import './Sentence.css';

const Sentence = ({ sentence, triggerWord, content, isOpen, toggleDropdown }) => {
  const parts = sentence.split(triggerWord);

  const handleClick = () => {
    toggleDropdown();
  };

  return (
    <div
      className={`sentence-container ${isOpen ? 'open' : ''}`}
      onClick={handleClick}
    >      
      <p className="main-sentence">
        {parts[0]}
        <span className="trigger-word">{triggerWord}</span>
        {parts[1]}
      </p>
      {isOpen && <p className="content">{content}</p>}
    </div>
  );
};

export default Sentence;
