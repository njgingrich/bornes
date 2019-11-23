import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  setVisibilityFilter,
  VisibilityFilters,
} from 'features/filters/filtersSlice';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});
const mapDispatchToProps = { setVisibilityFilter };

function FilterButton({ active, children, filter, setVisibilityFilter }) {
  return (
    <button disabled={active} onClick={() => setVisibilityFilter({ filter })}>
      {children}
    </button>
  );
}
FilterButton.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  filter: PropTypes.oneOf(Object.values(VisibilityFilters)),
  setVisibilityFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);
