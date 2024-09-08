import React from 'react';
import PropTypes from 'prop-types';

const SentenceWithEmphasis = ({ sentence, underlinedWords }) => {
    let updatedSentence = sentence;

    underlinedWords.forEach((word) => {
        const regex = new RegExp(`(${word})`, 'g');
        updatedSentence = updatedSentence.replace(
            regex, 
            `<span class="highlighted">$1</span>`
        );
    });

    return <span dangerouslySetInnerHTML={{ __html: updatedSentence }} />;
};

SentenceWithEmphasis.propTypes = {
    sentence: PropTypes.string.isRequired,
    underlinedWords: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SentenceWithEmphasis;
