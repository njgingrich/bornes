import { createSlice } from '@reduxjs/toolkit';
import uuid from 'uuid/v4';

const groupsSlice = createSlice({
  name: 'groups',
  initialState: [],
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
});

export const { addGroup } = groupsSlice.actions;
export default groupsSlice.reducer;
