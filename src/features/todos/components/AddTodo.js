import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addTodo } from 'features/todos/todosSlice';
import Input from 'components/Input';
import IconButton from 'components/IconButton';
import ConfirmIcon from 'icons/ConfirmIcon';

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
      <Input value={todoText} onChange={onChange} />
      <IconButton type="submit">
        <ConfirmIcon />
      </IconButton>
    </form>
  );
}
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
  groupId: PropTypes.string.isRequired,
};

const mapDispatchToProps = { addTodo };
export default connect(null, mapDispatchToProps)(AddTodo);
