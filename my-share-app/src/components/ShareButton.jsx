import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLink } from 'react-icons/fa';
import './ShareButton.css';

const ShareButton = ({ content }) => {
  const [copied, setCopied] = useState(false);

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(content)}`;
    window.open(url, '_blank');
  };

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(content)}`;
    window.open(url, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="share-buttons">
      <button onClick={shareOnFacebook}><FaFacebook /> Facebook</button>
      <button onClick={shareOnTwitter}><FaTwitter /> Twitter</button>
      <button onClick={copyLink}><FaLink /> {copied ? 'Link Copiado!' : 'Copiar Link'}</button>
    </div>
  );
};

export default ShareButton;