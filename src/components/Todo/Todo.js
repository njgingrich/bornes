import React from 'react'
import PropTypes from 'prop-types'

export function Todo({ completed, onClick, text }) {
  return (
    <li onClick={onClick} style={{textDecoration: completed ? 'line-through' : 'none'}}>
      {text}
    </li>
  )
}
Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}
