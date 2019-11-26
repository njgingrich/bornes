import React from 'react';
import { hot } from 'react-hot-loader/root';

import AddTodo from 'features/todos/components/AddTodo';
import VisibleTodoList from 'features/todos/components/VisibleTodoList';
import Filters from 'features/filters/components/Filters';
import AddGroup from 'features/groups/components/AddGroup';
import TodoGroupList from 'features/groups/components/TodoGroupList';

import StatusBar from 'components/StatusBar';
import '../styles/application.css';

function App() {
  return (
    <main className="page-layout">
      <section className="groups-section">
        <TodoGroupList className="groups-list" />
        <div className="groups-add">
          <AddGroup />
        </div>
      </section>
      <section className="todos-section">
        <AddTodo />
        <VisibleTodoList />
        <Filters />
      </section>
      <footer className="status-bar">
        <StatusBar />
      </footer>
    </main>
  );
}

export default hot(App);
