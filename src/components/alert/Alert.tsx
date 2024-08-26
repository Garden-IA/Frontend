import React from 'react';
import '../../../styles/globals.css';
import Button from '../button/Button';

interface Props {
  children: React.ReactNode;
  className?: string;
  title?: string;
  onAccept?: () => void;
  onCancel?: () => void;
}

const Alert = ({ children, className, title, onAccept, onCancel }: Props) => {
  return (
    <>
      <div className={className}>
        {title && <h2>{title}</h2>}
        <div>{children}</div>
        <div>
          <Button className="btn btn-primary" onClick={onAccept}>
            Aceptar
          </Button>
          <Button className="btn btn-secondary" onClick={onCancel}>
            Cancelar
          </Button>
        </div>
      </div>
    </>
  );
};

export default Alert;
