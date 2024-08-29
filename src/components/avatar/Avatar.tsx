import { UserCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

interface Props {
  title?: string;
  description?: string;
  src?: string;
  alt?: string;
}

const Avatar = ({ title, description, src, alt }: Props) => {
  return (
    <>
      <div className="avatar-card">
        <div className="flex items-center gap-4">
          {!src ? <UserCircleIcon className="h-12 w-12"></UserCircleIcon> : <img className="w-12 h-12 rounded-full" src={src} alt={alt} />}

          {title && description && (
            <div className="flex flex-col">
              <div className="self-start">
                <strong>{title}</strong>
              </div>
              <div className="self-start text-sm">
                <i>{description}</i>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Avatar;
