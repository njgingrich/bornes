import uuid from 'uuid/v4';
import groups, { addGroup } from './groupsSlice';
import { addTodo } from 'features/todos/todosSlice';
import { DEFAULT_GROUP_ID } from 'features/currentGroup/currentGroupsSlice';

describe('groups reducder', () => {
  it('should handle initial state', () => {
    expect(groups(undefined, {})).toEqual([
      {
        id: DEFAULT_GROUP_ID,
        name: 'Todos',
        todos: [],
      },
    ]);
  });

  it('should handle adding a group', () => {
    expect(
      groups([], { type: addGroup.type, payload: { id: 0, name: 'Group One' } })
    ).toEqual([{ id: 0, name: 'Group One', todos: [] }]);
  });

  it('should handle adding a todo to a group', () => {
    expect(
      groups(
        [
          {
            id: DEFAULT_GROUP_ID,
            name: 'Todos',
            todos: [],
          },
        ],
        {
          type: addTodo.type,
          payload: { id: 0, text: 'Todo One', groupId: DEFAULT_GROUP_ID },
        }
      )
    ).toEqual([
      {
        id: DEFAULT_GROUP_ID,
        name: 'Todos',
        todos: [0],
      },
    ]);
  });

  it('should add a todo to the right group', () => {
    const otherGroupId = uuid();

    expect(
      groups(
        [
          {
            id: DEFAULT_GROUP_ID,
            name: 'Todos',
            todos: [],
          },
          {
            id: otherGroupId,
            name: 'Second',
            todos: [],
          },
        ],
        {
          type: addTodo.type,
          payload: { id: 0, text: 'Todo One', groupId: DEFAULT_GROUP_ID },
        }
      )
    ).toEqual([
      {
        id: DEFAULT_GROUP_ID,
        name: 'Todos',
        todos: [0],
      },
      {
        id: otherGroupId,
        name: 'Second',
        todos: [],
      },
    ]);
  });

  it('should not blow up if an invalid todo is passed', () => {
    expect(
      groups(
        [
          {
            id: DEFAULT_GROUP_ID,
            name: 'Todos',
            todos: [],
          },
        ],
        {
          type: addTodo.type,
          payload: { id: 0, text: 'Todo One', groupId: uuid() },
        }
      )
    ).toEqual([
      {
        id: DEFAULT_GROUP_ID,
        name: 'Todos',
        todos: [],
      },
    ]);
  });
});
