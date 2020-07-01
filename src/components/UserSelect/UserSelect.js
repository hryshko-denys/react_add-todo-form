import React from 'react';
import './UserSelect.css';
import PropTypes from 'prop-types';
import { UserTypes } from '../Shape/ShapeTypes';

export const UserSelect = ({ users, value, onChangeUser }) => (
  <select
    className="form-control"
    id="exampleSelect1"
    name="select"
    value={value}
    placeholder="Choose a user"
    onChange={onChangeUser}
  >
    <option
      disabled
      defaultValue
    >
      Choose a user
    </option>
    {users.map(user => (
      <option key={user.name} value={user.id}>{user.name}</option>
    ))}
  </select>
);

UserSelect.propTypes = {
  users: PropTypes.arrayOf(
    UserTypes,
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChangeUser: PropTypes.func.isRequired,
};
