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
          <img className="w-10 h-10 rounded-full" src={src} alt={alt} />
          {title && description && (
            <div>
              <div>{title}</div>
              <div className="text-sm">{description}</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Avatar;
