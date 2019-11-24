import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addGroup } from 'features/groups/groupsSlice';

const mapDispatchToProps = { addGroup };

function AddGroup({ addGroup }) {
  const [name, setName] = useState('');

  function onChange(e) {
    setName(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;

    addGroup(name);
    setName('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input value={name} onChange={onChange} />
      <button type="submit">Add Group</button>
    </form>
  );
}
AddGroup.propTypes = {
  addGroup: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(AddGroup);
