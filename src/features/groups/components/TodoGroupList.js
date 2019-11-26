import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setCurrentGroup } from 'features/currentGroup/currentGroupsSlice';
import GroupListItem from 'features/currentGroup/GroupListItem';

function TodoGroupList({ groups, setCurrentGroup, ...rest }) {
  return (
    <ul {...rest}>
      {groups.map(group => (
        <GroupListItem
          key={group.id}
          group={group}
          onClick={() => setCurrentGroup({ id: group.id })}
        />
      ))}
    </ul>
  );
}
TodoGroupList.propTypes = {
  groups: PropTypes.array,
  setCurrentGroup: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  groups: state.groups,
});
const mapDispatchToProps = { setCurrentGroup };

export default connect(mapStateToProps, mapDispatchToProps)(TodoGroupList);
