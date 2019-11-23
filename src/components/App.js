import React from 'react';
import AddTodo from 'features/todos/components/AddTodo';
import VisibleTodoList from 'features/todos/components/VisibleTodoList';
import Filters from 'features/filters/components/Filters';
import StatusBar from './StatusBar';

import '../styles/application.css';

export function App() {
  return (
    <main className="page-layout">
      <section className="content">
        <AddTodo />
        <VisibleTodoList />
        <Filters />
      </section>
      <section className="status-bar">
        <StatusBar />
      </section>
    </main>
  );
}
