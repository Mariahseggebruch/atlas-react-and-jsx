import React from 'react';
import data from '../assets/links.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <ul>
        {data.map((item) => (
          <li key={item.label}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <p>&copy; {currentYear} Atlas School</p>
    </footer>
  );
};

export default Footer;
