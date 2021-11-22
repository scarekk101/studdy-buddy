import React, { useState } from 'react';
import { users } from 'data/users';

export const UserProviders = React.createContext({
  users: [],
  addUser: () => {},
  deleteUser: () => {},
});

const UserProvider = ({ children }) => {
  const [usersData, setUsers] = useState(users);

  function deleteUser(name) {
    const filteredUsers = usersData.filter((nameItem) =>
      nameItem.name !== name ? nameItem : null
    );
    setUsers(filteredUsers);
  }

  function addUser(inputValues) {
    const newUser = {
      average: inputValues.average,
      name: inputValues.name,
      attendance: inputValues.attendance,
    };

    setUsers((users) => [...users, newUser]);
  }

  return (
    <UserProviders.Provider
      value={{
        users: usersData,
        addUser,
        deleteUser,
      }}
    >
      {children}
    </UserProviders.Provider>
  );
};

UserProvider.propTypes = {};

export default UserProvider;
