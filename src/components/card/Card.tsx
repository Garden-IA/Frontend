'use client';

import React from 'react';
import '../../../styles/globals.css';
import Button from '../button/Button';
import Image from 'next/image';

interface Props {
  title?: string;
  img?: string;
  imgAlt?: string;
  children?: React.ReactNode;
  className?: string;
  hasBtn?: boolean;
  onClick?: () => void;
  btnText?: string;
  btnClassName?: string;
  icon?: React.ReactNode;
  hasBtnCancel?: boolean;
  btnCancelOnClick?: () => void;
  btnCancelText?: string;
  btnCancelClassName?: string;
}

const Card = ({
  title,
  children,
  className,
  img,
  imgAlt,
  hasBtn,
  onClick,
  btnText,
  btnClassName,
  icon,
  hasBtnCancel,
  btnCancelOnClick,
  btnCancelClassName,
}: Props) => {
  return (
    <>
      <div className={`flex flex-col rounded-2xl shadow-xl ${className}`}>
        {img && <Image src={img} alt={imgAlt!} className="rounded-t-2xl h-64 object-cover" />}
        <div className="flex flex-col">
          <div className="flex flex-row items-center mb-4">
            {icon && icon}
            {title && <div className="text-2xl font-bold">{title}</div>}
          </div>

          <div className=" text-lg">{children}</div>
          <div className="flex flex-row justify-center">
            {hasBtnCancel && btnCancelOnClick && (
              <Button className={`btn ${btnCancelClassName} mr-8`} onClick={btnCancelOnClick}>
                Cancelar
              </Button>
            )}
            {hasBtn && onClick && (
              <Button className={`btn ${btnClassName}`} onClick={onClick}>
                {btnText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
  return (
    <div className={`mb-4 ${className}`}>
      {title && <h2>{title}</h2>}
      <div>{children}</div>
    </div>
  );
};

export default Card;
