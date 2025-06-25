// src/components/Button.jsx
import React from 'react';

const Button = ({ title, onClick, style }) => {
  return (
    <button onClick={onClick} style={{ padding: 10, borderRadius: 5, ...style }}>
      {title}
    </button>
  );
};

export default Button;

