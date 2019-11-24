import { combineReducers } from 'redux';
import todosReducer from 'features/todos/todosSlice';
import filtersReducer from 'features/filters/filtersSlice';
import groupsReducer from 'features/groups/groupsSlice';

export default combineReducers({
  groups: groupsReducer,
  todos: todosReducer,
  visibilityFilter: filtersReducer,
});
