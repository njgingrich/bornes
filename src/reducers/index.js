import { combineReducers } from 'redux';
import todosReducer from 'features/todos/todosSlice';
import filtersReducer from 'features/filters/filtersSlice';
import groupsReducer from 'features/groups/groupsSlice';
import currentGroupsReducer from 'features/currentGroup/currentGroupsSlice';

export default combineReducers({
  currentGroup: currentGroupsReducer,
  groups: groupsReducer,
  todos: todosReducer,
  visibilityFilter: filtersReducer,
});
