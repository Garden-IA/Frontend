import React from 'react';

interface Props {
  className?: string;
}

const Divider = ({ className }: Props) => {
  return <hr className={`divider ${className}`} />;
};

export default Divider;
