import { createSlice } from '@reduxjs/toolkit';
import uuid from 'uuid/v4';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer(state, action) {
        const { id, text } = action.payload;
        state.push({ id, text, completed: false });
      },
      prepare(text, groupId) {
        return { payload: { text, id: uuid(), groupId } };
      },
    },
    toggleTodo(state, action) {
      const todo = state.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: {
      reducer(state, action) {
        return state.filter(todo => todo.id !== action.payload.id);
      },
      prepare(todo, groupId) {
        return { payload: { id: todo.id, groupId } };
      },
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
