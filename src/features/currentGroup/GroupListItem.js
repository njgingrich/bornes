import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStatetoProps = (state, ownProps) => ({
  active: state.currentGroup === ownProps.group.id,
});

function GroupListItem({ active, group, onClick }) {
  return (
    <li className={`${active ? 'group__active' : ''}`} onClick={onClick}>
      {group.name}
    </li>
  );
}
GroupListItem.propTypes = {
  active: PropTypes.bool.isRequired,
  group: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    todos: PropTypes.array.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default connect(mapStatetoProps)(GroupListItem);
