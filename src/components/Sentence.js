import React, { useState } from 'react';
import './Sentence.css';

const Sentence = ({ sentence, triggerWord, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const parts = sentence.split(triggerWord);

  return (
    <div className="sentence-container">
      <p className="main-sentence" onClick={toggleDropdown}>
        {parts[0]}
        <span className="trigger-word">{triggerWord}</span>
        {parts[1]}
      </p>
      {isOpen && <p className="content">{content}</p>}
    </div>
  );
};

export default Sentence;
