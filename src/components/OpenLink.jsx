import React from 'react';
import openSvg from '../assets/open.svg'

const OpenLink = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={openSvg} alt='open link' />
    </a>
  );
};

export default OpenLink;
