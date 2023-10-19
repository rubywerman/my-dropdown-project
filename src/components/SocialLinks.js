import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://github.com/rubywerman" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className="icon1" icon={faGithub} size="1x"/>
      </a>
      <a href="https://www.linkedin.com/in/rubywerman/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className="icon2" icon={faLinkedin} size="1x"/>
      </a>
    </div>
  );
}

export default SocialLinks;
