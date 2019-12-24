import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import AddTodo from 'features/todos/components/AddTodo';
import VisibleTodoList from 'features/todos/components/VisibleTodoList';
import Filters from 'features/filters/components/Filters';
import { deleteGroup } from 'features/groups/groupsSlice';
import IconButton from 'components/IconButton';
import TrashIcon from 'icons/TrashIcon';

function GroupView({ deleteGroup, group }) {
  function onClick() {
    deleteGroup({ id: group.id });
  }

  return (
    <Fragment>
      <div className="group-header">
        <h2>{group.name}</h2>
        <IconButton onClick={onClick}>
          <TrashIcon />
        </IconButton>
      </div>
      <Filters />
      <AddTodo groupId={group.id} />
      <VisibleTodoList groupId={group.id} />
    </Fragment>
  );
}

const mapStateToProps = state => ({
  group: state.groups.find(g => g.id === state.currentGroup),
});
const mapDispatchToProps = { deleteGroup };
export default connect(mapStateToProps, mapDispatchToProps)(GroupView);
