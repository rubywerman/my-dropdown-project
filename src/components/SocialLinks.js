import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://github.com/rubywerman" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="1x" style={{ marginRight: '10px', color: '99CCFF'}} />
      </a>
      <a href="https://www.linkedin.com/in/rubywerman/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="1x" style={{color: '99CCFF'}}/>
      </a>
    </div>
  );
}

export default SocialLinks;
