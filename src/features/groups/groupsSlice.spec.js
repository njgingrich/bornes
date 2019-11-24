import groups, { addGroup } from './groupsSlice';

describe('groups reducder', () => {
  it('should handle initial state', () => {
    expect(groups(undefined, {})).toEqual([]);
  });

  it('should handle adding a group', () => {
    expect(
      groups([], { type: addGroup.type, payload: { id: 0, name: 'Group One' } })
    ).toEqual([{ id: 0, name: 'Group One', todos: [] }]);
  });
});
