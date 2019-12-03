import { createSlice } from '@reduxjs/toolkit';
import uuid from 'uuid/v4';
import { DEFAULT_GROUP_ID } from 'features/currentGroup/currentGroupsSlice';
import { addTodo, deleteTodo } from 'features/todos/todosSlice';

const DEFAULT_GROUP = {
  id: DEFAULT_GROUP_ID,
  name: 'Todos',
  todos: [],
};

const groupsSlice = createSlice({
  name: 'groups',
  initialState: [DEFAULT_GROUP],
  reducers: {
    addGroup: {
      reducer(state, action) {
        const { id, name } = action.payload;
        state.push({ id, name, todos: [] });
      },
      prepare(name) {
        return { payload: { id: uuid(), name } };
      },
    },
    deleteGroup(state, action) {
      if (state.length <= 1) return state;

      return state.filter(group => group.id !== action.payload.id);
    },
  },
  extraReducers: {
    [addTodo]: (state, action) => {
      const currentGroup = state.find(g => g.id === action.payload.groupId);
      if (!currentGroup) return;
      currentGroup.todos.push(action.payload.id);
    },
    [deleteTodo]: (state, action) => {
      const currentGroup = state.find(g => g.id === action.payload.groupId);
      if (!currentGroup) return;
      currentGroup.todos = currentGroup.todos.filter(
        t => t !== action.payload.id
      );
    },
  },
});

export const { addGroup, deleteGroup } = groupsSlice.actions;
export default groupsSlice.reducer;
