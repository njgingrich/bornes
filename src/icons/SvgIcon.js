import React from 'react';

export default function SvgIcon({ children, size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      fill="none"
      stroke="#ababab"
      color="#ababab"
    >
      {children}
    </svg>
  );
}
SvgIcon.defaultProps = {
  size: 32,
};
