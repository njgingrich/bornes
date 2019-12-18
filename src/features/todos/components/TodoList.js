import React from 'react';
import Todo from 'features/todos/components/Todo';
import IconButton from 'components/IconButton';
import TrashIcon from 'icons/TrashIcon';

function TodoList({ todos, deleteTodo, groupId, toggleTodo }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <div key={todo.id} className="row row__align-center">
          <Todo
            completed={todo.completed}
            onClick={() => toggleTodo(todo)}
            text={todo.text}
          />
          <IconButton onClick={() => deleteTodo(todo, groupId)}>
            <TrashIcon size={24} />
          </IconButton>
        </div>
      ))}
    </ul>
  );
}

export default TodoList;
