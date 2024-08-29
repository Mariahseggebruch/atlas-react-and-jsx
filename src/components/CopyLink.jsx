import React, { useState } from 'react';
import copySvg from '../assets/copy.svg'

const CopyLink = ({ link }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000); // Reset after 2 seconds
  };

  return (
    <img
      src={copySvg}
      alt="Copy link"
      className="copy"
      onClick={handleCopy}
    />
  );
};

export default CopyLink;
