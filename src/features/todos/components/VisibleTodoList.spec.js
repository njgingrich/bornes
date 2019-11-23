import uuid from 'uuid/v4';
import { selectVisibleTodos } from 'features/todos/components/VisibleTodoList';
import { VisibilityFilters } from 'features/filters/filtersSlice';

describe('Visible TodoList selector', () => {
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
