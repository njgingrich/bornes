import React from "react";
import FilterButton from "features/filters/components/FilterButton";
import { VisibilityFilters } from "features/filters/filtersSlice";

export default function Filters() {
  return (
    <div>
      <FilterButton filter={VisibilityFilters.SHOW_ALL}>All</FilterButton>
      <FilterButton filter={VisibilityFilters.SHOW_COMPLETED}>
        Completed
      </FilterButton>
      <FilterButton filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterButton>
    </div>
  );
}
