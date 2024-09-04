'use client';

import React from 'react';
import '../../../styles/globals.css';

interface Props {
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

const Button = ({ onClick, children, disabled, className }: Props) => {
  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {children}
    </button>
  );
};

export default Button;
