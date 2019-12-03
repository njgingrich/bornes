import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addTodo } from 'features/todos/todosSlice';

function AddTodo({ addTodo, groupId }) {
  const [todoText, setTodoText] = useState('');

  function onChange(e) {
    setTodoText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!todoText.trim()) return;

    addTodo(todoText, groupId);
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
  groupId: PropTypes.string.isRequired,
};

const mapDispatchToProps = { addTodo };
export default connect(null, mapDispatchToProps)(AddTodo);
