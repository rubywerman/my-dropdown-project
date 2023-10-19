import React from 'react';
import PropTypes from 'prop-types';

const SentenceWithLink = ({ sentence, replacements }) => {
    let updatedSentence = sentence;

    replacements.forEach(({ customWord, url }) => {
        const regex = new RegExp(`(${customWord})`, 'g');
        updatedSentence = updatedSentence.replace(
            regex, 
            `<a class="underlined" target="_blank" rel="noopener noreferrer" href="${url}">$1</a>`
        );
    });

    return <span dangerouslySetInnerHTML={{ __html: updatedSentence }} />;
};

SentenceWithLink.propTypes = {
    sentence: PropTypes.string.isRequired,
    replacements: PropTypes.arrayOf(
        PropTypes.shape({
            customWord: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default SentenceWithLink;
