import React, { useState } from 'react';

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
      src="/src/assets/copy.svg"
      alt="Copy link"
      className="copy"
      onClick={handleCopy}
    />
  );
};

export default CopyLink;
