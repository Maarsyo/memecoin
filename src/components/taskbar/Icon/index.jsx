// src/components/Icon.jsx
import React from 'react';
import './Icon.css';

function Icon({ src, alt }) {
  return (
    <div className="icon">
      <img src={src} alt={alt} />
    </div>
  );
}

export default Icon;