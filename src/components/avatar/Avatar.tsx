import Image from 'next/image';
import React from 'react';
import { FaUser } from 'react-icons/fa';

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
          {!src ? <FaUser className="h-8 w-8"></FaUser> : <Image className="w-8 h-8 rounded-full" src={src} alt={alt!} />}

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
