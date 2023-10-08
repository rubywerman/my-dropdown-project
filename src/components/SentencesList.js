import React from 'react';
import Sentence from './Sentence';

const SentencesList = () => {
  const sentences = [
    { sentence: 'Writes code', triggerWord: 'code', content: 'This is the new sentence for code.' },
    { sentence: 'And makes filters.', triggerWord: 'filters', content: 'This is the new sentence for filters.' },
    { sentence: 'Has worked places.', triggerWord: 'places', content: 'This is the new sentence for filters.' },
    { sentence: 'And done projects.', triggerWord: 'projects', content: 'This is the new sentence for filters.' }
  ];

  return (
    <div className="sentences-list">
      {sentences.map((sentence, index) => (
        <Sentence key={index} {...sentence} />
      ))}
    </div>
  );
};

export default SentencesList;
