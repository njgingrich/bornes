import { connect } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { deleteTodo, toggleTodo } from 'features/todos/todosSlice';
import TodoList from 'features/todos/components/TodoList';
import { VisibilityFilters } from 'features/filters/filtersSlice';

export const getTodos = (state, props) => {
  const currentGroup = state.groups.find(g => g.id === props.groupId);
  if (!currentGroup) return [];

  return currentGroup.todos.map(id => state.todos.find(t => t.id === id));
};
const getFilter = state => state.visibilityFilter;

function getByFilter(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
}

const selectVisibleTodos = createSelector(
  [getTodos, getFilter],
  (todos, filter) => {
    return getByFilter(todos, filter).sort((a, b) => b.createdAt - a.createdAt);
  }
);

const mapStateToProps = (state, props) => ({
  todos: selectVisibleTodos(state, props),
  groupId: state.currentGroup,
});

const mapDispatchToProps = { deleteTodo, toggleTodo };

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
export { selectVisibleTodos };
