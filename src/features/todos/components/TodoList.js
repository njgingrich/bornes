import React from "react";
import Todo from "features/todos/components/Todo";

function TodoList({ todos, toggleTodo }) {
  return (
    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          completed={todo.completed}
          onClick={() => toggleTodo(todo)}
          text={todo.text}
        />
      ))}
    </ul>
  );
}

export default TodoList;
