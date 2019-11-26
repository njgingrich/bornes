import uuid from 'uuid/v4';
import todos, { addTodo, deleteTodo, toggleTodo } from './todosSlice';

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(todos(undefined, {})).toEqual([]);
  });

  it('should handle adding a todo', () => {
    const action = {
      type: addTodo.type,
      payload: {
        id: 0,
        text: 'Testing',
      },
    };
    const action2 = {
      type: addTodo.type,
      payload: {
        id: 1,
        text: 'Testing 2',
      },
    };

    expect(todos([], action)).toEqual([
      { completed: false, id: 0, text: 'Testing' },
    ]);

    expect(
      todos([{ completed: false, id: 0, text: 'Testing' }], action2)
    ).toEqual([
      { completed: false, id: 0, text: 'Testing' },
      { completed: false, id: 1, text: 'Testing 2' },
    ]);
  });

  it('should handle toggling a todo', () => {
    const toggleAction = {
      type: toggleTodo.type,
      payload: {
        id: 1,
      },
    };

    expect(
      todos(
        [
          { completed: false, id: 0, text: 'Testing' },
          { completed: false, id: 1, text: 'Testing 2' },
          { completed: false, id: 2, text: 'Testing 3' },
        ],
        toggleAction
      )
    ).toEqual([
      { completed: false, id: 0, text: 'Testing' },
      { completed: true, id: 1, text: 'Testing 2' },
      { completed: false, id: 2, text: 'Testing 3' },
    ]);
  });

  it('should handle deleting todos', () => {
    expect(
      todos(
        [
          { completed: false, id: 0, text: 'Testing' },
          { completed: false, id: 1, text: 'Testing 2' },
          { completed: false, id: 2, text: 'Testing 3' },
        ],
        { type: deleteTodo.type, payload: { id: 1 } }
      )
    ).toEqual([
      { completed: false, id: 0, text: 'Testing' },
      { completed: false, id: 2, text: 'Testing 3' },
    ]);

    expect(
      todos([{ completed: false, id: 0, text: 'Testing' }], {
        type: deleteTodo.type,
        payload: { id: 0 },
      })
    ).toEqual([]);
  });

  it('should handle deleting an invalid todo', () => {
    expect(todos([], { type: deleteTodo.type, payload: { id: 1 } })).toEqual(
      []
    );
  });
});
