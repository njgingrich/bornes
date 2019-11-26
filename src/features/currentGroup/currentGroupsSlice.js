import { createSlice } from '@reduxjs/toolkit';
import uuid from 'uuid/v4';

export const DEFAULT_GROUP_ID = uuid();

const currentGroupsSlice = createSlice({
  name: 'currentGroup',
  initialState: DEFAULT_GROUP_ID,
  reducers: {
    setCurrentGroup(state, action) {
      const { id } = action.payload;
      return id;
    },
  },
});

export const { setCurrentGroup } = currentGroupsSlice.actions;
export default currentGroupsSlice.reducer;
