import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function TodoGroupList({ groups, ...rest }) {
  return (
    <ul {...rest}>
      {groups.map(group => (
        <li>{group.name}</li>
      ))}
    </ul>
  );
}
TodoGroupList.propTypes = {
  groups: PropTypes.array,
};

const mapStateToProps = state => ({
  groups: state.groups,
});

export default connect(mapStateToProps)(TodoGroupList);
