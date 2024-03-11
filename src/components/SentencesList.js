import { React, useState, useEffect } from 'react';
import Sentence from './Sentence';
import WorkText from './WorkText';
import egg from '../assets/egg.png'
import cracked from '../assets/cracked.png'

const SentencesList = () => {
  const sentences = [
    { sentence: 'Writes code.', triggerWord: 'code', content:  <WorkText isOpen={false}/> },
    { sentence: 'Makes filters.', triggerWord: 'filters', content: 'I create augmented reality filters for Instagram, Tiktok, and Snapchat. My filters have millions of impressions worldwide.' }
  ];

  const [openStates, setOpenStates] = useState(Array(sentences.length).fill(false));
  const [isWorkTextOpen, setWorkTextOpen] = useState(false); 
  
  // useEffect(() => {
  //   setWorkTextOpen(openStates[0]);
  // }, [openStates]);

  const toggleAll = () => {
    const areAllOpen = openStates.every(state => state);
    setOpenStates(Array(sentences.length).fill(!areAllOpen));
    setWorkTextOpen(true); 
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
          content={index === 0 ? <WorkText isOpen={isWorkTextOpen}/> : sentenceData.content}
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