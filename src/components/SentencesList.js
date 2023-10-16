import { React, useState } from 'react';
import Sentence from './Sentence';
import WorkText from './WorkText';
import egg from '../assets/egg.png'
import cracked from '../assets/cracked.png'

const SentencesList = () => {
  const sentences = [
    { sentence: 'Writes code.', triggerWord: 'code', content:  <WorkText/> },
    { sentence: 'Makes filters.', triggerWord: 'filters', content: 'I create augmented reality filters for Instagram, Tiktok, and Snapchat. My filters have millions of impressions worldwide.' }
  ];

  const [openStates, setOpenStates] = useState(Array(sentences.length).fill(false));

  const toggleAll = () => {
    const areAllOpen = openStates.every(state => state);
    setOpenStates(Array(sentences.length).fill(!areAllOpen));
  };

  const toggleDropdown = index => {
    const newOpenStates = Array(sentences.length).fill(false); 
    newOpenStates[index] = !openStates[index]; 
    setOpenStates(newOpenStates);
};

  return (
    <div className="sentences-list">
      {sentences.map((sentenceData, index) => (
        <Sentence
          key={index}
          {...sentenceData}
          isOpen={openStates[index]}
          toggleDropdown={() => toggleDropdown(index)}
        />
      ))}
      <img
        className='button'
        src={!openStates.every(state => state) ? egg : cracked}
        alt={'egg'}
        onClick={toggleAll}
      /> 
      </div>
  );
};

export default SentencesList;