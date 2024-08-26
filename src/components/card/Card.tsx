'use client';

import React from 'react';
import '../../../styles/globals.css';

interface Props {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Card = ({ title, children, className }: Props) => {
  return (
    <div className={className}>
      {title && <h2>{title}</h2>}
      <div>{children}</div>
    </div>
  );
};

export default Card;
