import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import AddTodo from 'features/todos/components/AddTodo';
import VisibleTodoList from 'features/todos/components/VisibleTodoList';
import Filters from 'features/filters/components/Filters';
import { deleteGroup } from 'features/groups/groupsSlice';

function GroupView({ deleteGroup, group }) {
  function onClick() {
    deleteGroup({ id: group.id });
  }

  return (
    <Fragment>
      <div className="row">
        <h2>{group.name}</h2>
        <button onClick={onClick}>X</button>
      </div>
      <AddTodo groupId={group.id} />
      <VisibleTodoList groupId={group.id} />
      <Filters />
    </Fragment>
  );
}

const mapStateToProps = state => ({
  group: state.groups.find(g => g.id === state.currentGroup),
});
const mapDispatchToProps = { deleteGroup };
export default connect(mapStateToProps, mapDispatchToProps)(GroupView);
