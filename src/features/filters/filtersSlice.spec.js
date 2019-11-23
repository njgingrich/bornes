import filters, {
  setVisibilityFilter,
  VisibilityFilters,
} from './filtersSlice';

describe('filters reducer', () => {
  it('should handle initial state', () => {
    expect(filters(undefined, {})).toEqual(VisibilityFilters.SHOW_ALL);
  });

  it('should handle changing filters', () => {
    const setActiveAction = {
      type: setVisibilityFilter.type,
      payload: { filter: VisibilityFilters.SHOW_ACTIVE },
    };
    expect(filters(VisibilityFilters.SHOW_ALL, setActiveAction)).toEqual(
      VisibilityFilters.SHOW_ACTIVE
    );
  });
});
