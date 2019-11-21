import React, { useState } from 'react'

import { Todo } from '../Todo/Todo'

let baseId = 0;

export function TodoList() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  function removeTodo(todo) {
    const ix = todos.findIndex(t => t.id === todo.id);
    if (ix < 0) return;

    const copy = [...todos];
    copy.splice(ix, 1);
    setTodos(copy);
  }

  function toggleTodo(todo) {
    const ix = todos.findIndex(t => t.id === todo.id);
    if (ix < 0) return;

    const copy = [...todos];
    copy[ix].completed = !copy[ix].completed
    setTodos(copy);
  }

  function addTodo(e) {
    e.preventDefault();
    const todo = { completed: false, id: baseId++, text };
    setTodos([...todos, todo]);
    setText('');
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <input value={text} onChange={e => setText(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map(todo => (
        <Todo key={todo.id} completed={todo.completed} onClick={() => toggleTodo(todo)} text={todo.text} />
      ))}
    </div>
  )
}
