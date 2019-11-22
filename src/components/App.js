import React, { Fragment } from "react";
import AddTodo from "features/todos/components/AddTodo";
import VisibleTodoList from "features/todos/components/VisibleTodoList";
import Filters from "features/filters/components/Filters";

export function App() {
  return (
    <Fragment>
      <AddTodo />
      <VisibleTodoList />
      <Filters />
    </Fragment>
  );
}
