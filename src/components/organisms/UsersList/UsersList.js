import { React, useState, useEffect } from 'react';
import { users } from 'data/users';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import {
  Wrapper,
  StyledList,
} from 'components/organisms/UsersList/UsersList.styles';

const UsersList = () => {
  const [usersData, setUsers] = useState([...users]);

  function deleteUser(name) {
    const filteredUsers = usersData.filter((nameItem) =>
      nameItem.name !== name ? nameItem : null
    );
    setUsers(filteredUsers);
  }

  return (
    <Wrapper>
      <StyledList>
        {usersData.map((userData) => (
          <UserListItem
            filteredUsers={deleteUser}
            userData={userData}
          />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
