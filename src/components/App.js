import React from 'react';
import { hot } from 'react-hot-loader/root';

import AddGroup from 'features/groups/components/AddGroup';
import TodoGroupList from 'features/groups/components/TodoGroupList';

import StatusBar from 'components/StatusBar';
import '../styles/application.css';
import GroupView from 'features/currentGroup/GroupView';

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
        <GroupView />
      </section>
      <footer className="status-bar">
        <StatusBar />
      </footer>
    </main>
  );
}

export default hot(App);
