// src/components/Header.jsx
import React from 'react';
import Greeting from './Greeting';
import SocialLinks from './SocialLinks';

const Header = () => {
  return (
    <nav>
      <Greeting />
      <SocialLinks />
    </nav>
  );
};

export default Header;
