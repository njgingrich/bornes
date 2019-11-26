import React from 'react';
import Todo from 'features/todos/components/Todo';

function TodoList({ todos, deleteTodo, groupId, toggleTodo }) {
  return (
    <ul>
      {todos.map(todo => (
        <div key={todo.id} className="row row__align-center">
          <Todo
            completed={todo.completed}
            onClick={() => toggleTodo(todo)}
            text={todo.text}
          />
          <button onClick={() => deleteTodo(todo, groupId)}>X</button>
        </div>
      ))}
    </ul>
  );
}

export default TodoList;
