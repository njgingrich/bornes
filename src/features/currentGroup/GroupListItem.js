import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

const mapStatetoProps = (state, ownProps) => ({
  active: state.currentGroup === ownProps.group.id,
});

function GroupListItem({ active, className, group, onClick }) {
  return (
    <li
      className={classnames(
        'group-item',
        active && 'group-item__active',
        className
      )}
      onClick={onClick}
    >
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
