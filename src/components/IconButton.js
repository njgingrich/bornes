import React from 'react';

export default function IconButton({ children, ...props }) {
  return (
    <button className="button icon-button" {...props}>
      {children}
    </button>
  )
}