import { connect } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { deleteTodo, toggleTodo } from 'features/todos/todosSlice';
import TodoList from 'features/todos/components/TodoList';
import { VisibilityFilters } from 'features/filters/filtersSlice';

export const getTodos = state => {
  const currentGroup = state.groups.find(
    group => group.id === state.currentGroup
  );
  if (!currentGroup) return [];

  return currentGroup.todos.map(id => state.todos.find(t => t.id === id));
};
const getFilter = state => state.visibilityFilter;

const selectVisibleTodos = createSelector(
  [getTodos, getFilter],
  (todos, filter) => {
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
);

const mapStateToProps = state => ({
  todos: selectVisibleTodos(state),
  groupId: state.currentGroup,
});

const mapDispatchToProps = { deleteTodo, toggleTodo };

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
export { selectVisibleTodos };
