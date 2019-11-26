import { createSlice } from '@reduxjs/toolkit';
import uuid from 'uuid/v4';
import { DEFAULT_GROUP_ID } from 'features/currentGroup/currentGroupsSlice';
import { addTodo } from 'features/todos/todosSlice';

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
  },
  extraReducers: {
    [addTodo]: (state, action) => {
      const currentGroup = state.find(g => g.id === action.payload.groupId);
      if (!currentGroup) return;
      currentGroup.todos.push(action.payload.id);
    },
  },
});

export const { addGroup } = groupsSlice.actions;
export default groupsSlice.reducer;
