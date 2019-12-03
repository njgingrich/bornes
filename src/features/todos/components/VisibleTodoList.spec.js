import uuid from 'uuid/v4';
import {
  selectVisibleTodos,
  getTodos,
} from 'features/todos/components/VisibleTodoList';
import { VisibilityFilters } from 'features/filters/filtersSlice';

describe('VisibleTodoList selector', () => {
  const todosList = [
    { id: uuid(), completed: false, text: 'todo #1' },
    { id: uuid(), completed: false, text: 'todo #2' },
    { id: uuid(), completed: true, text: 'todo #3' },
    { id: uuid(), completed: false, text: 'todo #4' },
  ];

  it('should filter todos based on the provided filter', () => {
    let selectedTodos = selectVisibleTodos.resultFunc(
      todosList,
      VisibilityFilters.SHOW_ALL
    );
    expect(selectedTodos.length).toEqual(4);

    selectedTodos = selectVisibleTodos.resultFunc(
      todosList,
      VisibilityFilters.SHOW_COMPLETED
    );
    expect(selectedTodos.length).toEqual(1);

    selectedTodos = selectVisibleTodos.resultFunc(
      todosList,
      VisibilityFilters.SHOW_ACTIVE
    );
    expect(selectedTodos.length).toEqual(3);
  });
});

describe('VisibleTodoList state selector function', () => {
  it('should get todos for the correct group', () => {
    expect(
      getTodos(
        {
          currentGroup: 0,
          groups: [
            { id: 0, todos: [2, 3] },
            { id: 1, todos: [1] },
            { id: 2, todos: [] },
          ],
          todos: [
            { id: 1, text: 'Todo One', completed: false },
            { id: 2, text: 'Todo Two', completed: false },
            { id: 3, text: 'Todo Three', completed: false },
          ],
        },
        { groupId: 0 }
      )
    ).toEqual([
      { id: 2, text: 'Todo Two', completed: false },
      { id: 3, text: 'Todo Three', completed: false },
    ]);

    expect(
      getTodos(
        {
          currentGroup: 1,
          groups: [
            { id: 0, todos: [2, 3] },
            { id: 1, todos: [1] },
            { id: 2, todos: [] },
          ],
          todos: [
            { id: 1, text: 'Todo One', completed: false },
            { id: 2, text: 'Todo Two', completed: false },
            { id: 3, text: 'Todo Three', completed: false },
          ],
        },
        { groupId: 1 }
      )
    ).toEqual([{ id: 1, text: 'Todo One', completed: false }]);

    expect(
      getTodos(
        {
          currentGroup: 2,
          groups: [
            { id: 0, todos: [2, 3] },
            { id: 1, todos: [1] },
            { id: 2, todos: [] },
          ],
          todos: [
            { id: 1, text: 'Todo One', completed: false },
            { id: 2, text: 'Todo Two', completed: false },
            { id: 3, text: 'Todo Three', completed: false },
          ],
        },
        { groupId: 2 }
      )
    ).toEqual([]);
  });
});
