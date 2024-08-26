import React from 'react';

const OpenLink = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src="/src/assets/open.svg" alt="Open link" />
    </a>
  );
};

export default OpenLink;
