'use client';
// Components

export const Container = ({ className, children }) => {
  return <div className={`container ${className ? `${className} ` : ''}`}>{children}</div>;
};
