import React from 'react';
import linkedinSvg from '../assets/linkedin.svg'
import githubSvg from '../assets/github.svg'

const SocialLinks = () => {
  const linkedInUrl = 'https://www.linkedin.com/in/mariahseggebruch/';
  const githubUrl = 'https://github.com/Mariahseggebruch/atlas-react-and-jsx'; // Assuming this is the project's repository

  return (
    <div className="social-links">
      <a
        href={linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Mariah Seggebruch on LinkedIn"
        
      >
        <img src={linkedinSvg} alt="linkedin" />
      </a>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Mariah Seggebruch on GitHub"
      >
        <img src={githubSvg} alt="github" />
      </a>
    </div>
  );
};

export default SocialLinks;
