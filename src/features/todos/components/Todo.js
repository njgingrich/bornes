import React from 'react';
import PropTypes from 'prop-types';

export default function Todo({ completed, onClick, text }) {
  return (
    <li
      className={`todo ${completed ? 'todo__completed' : ''}`}
      onClick={onClick}
    >
      {text}
    </li>
  );
}
Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
