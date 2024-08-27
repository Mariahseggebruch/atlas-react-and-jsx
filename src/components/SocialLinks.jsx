import React from 'react';


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
        <img src="/src/assets/linkedin.svg" alt="LinkedIn icon" />
      </a>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Mariah Seggebruch on GitHub"
      >
        <img src="/src/assets/github.svg" alt="GitHub icon" />
      </a>
    </div>
  );
};

export default SocialLinks;
