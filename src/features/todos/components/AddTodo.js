import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addTodo } from 'features/todos/todosSlice';

const mapDispatchToProps = { addTodo };

function AddTodo({ addTodo }) {
  const [todoText, setTodoText] = useState('');

  function onChange(e) {
    setTodoText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!todoText.trim()) return;

    addTodo(todoText);
    setTodoText('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input value={todoText} onChange={onChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
}
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(AddTodo);
