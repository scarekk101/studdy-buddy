import React from 'react';
import { users } from 'data/users';
import UserListItem from 'components/UserListItem/UserListItem';

const UsersList = () => {
  return (
    <>
      <ul className="users__list">
        {users.map((userData) => (
          <UserListItem userData={userData} />
        ))}
      </ul>
    </>
  );
};

export default UsersList;
