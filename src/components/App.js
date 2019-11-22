import React, { Fragment } from "react";
import AddTodo from "features/todos/components/AddTodo";
import TodoList from "features/todos/components/TodoList";
import Filters from "features/filters/components/Filters";

export function App() {
  return (
    <Fragment>
      <AddTodo />
      <TodoList />
      <Filters />
    </Fragment>
  );
}
