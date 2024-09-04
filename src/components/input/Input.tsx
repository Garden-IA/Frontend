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
      <div className="flex flex-col w-full">
        {hasLabel && <label htmlFor={id}>{label ? label : id}</label>}
        <input
          className={`px-3 py-2 text-base font-bold rounded-lg border focus:outline focus:outline-4 focus:outline-offset-4 ${className}`}
          placeholder={placeholder}
          control-id={controlId}
          type={type}
          disabled={isDisabled}
          id={id}
          name={id}
        />
      </div>
    </>
  );
};

export default Input;
