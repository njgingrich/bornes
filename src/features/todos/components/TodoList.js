import React from "react";
import { connect } from "react-redux";

import { toggleTodo } from "features/todos/todosSlice";
import Todo from "features/todos/components/Todo";

const mapDispatchToProps = { toggleTodo };
const mapStateToProps = state => ({
  todos: state.todos,
});

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

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
