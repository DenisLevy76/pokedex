import React from 'react';
import './styles.css';

export const Button = ({
  children,
  backgroundColor,
  ...othersPropertyOfTagButton
}) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: backgroundColor }}
      {...othersPropertyOfTagButton}
    >
      {children}
    </button>
  );
};
