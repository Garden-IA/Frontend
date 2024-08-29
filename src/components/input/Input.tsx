import React from 'react';

interface Props {
  id: string;
  placeholder?: string;
  controlId?: string;
  className?: string;
  type?: string;
  isDisabled?: boolean;
  hasLabel?: boolean;
  label?: string;
}

const Input = ({ placeholder, controlId, className, type, isDisabled = false, id, hasLabel, label }: Props) => {
  return (
    <>
      {hasLabel && <label htmlFor={id}>{label ? label : id}</label>}
      <input
        className={`w-full px-3 py-2 text-base font-bold rounded-lg border focus:outline focus:outline-4 focus:outline-offset-4 ${className}`}
        placeholder={placeholder}
        control-id={controlId}
        type={type}
        disabled={isDisabled}
        id={id}
        name={id}
      />
    </>
  );
};

export default Input;
