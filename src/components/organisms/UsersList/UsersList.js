import React, { useContext } from 'react';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { StyledList } from 'components/organisms/UsersList/UsersList.styles';
import { UserProviders } from 'providers/UserProvider';
const UsersList = () => {
  const { users } = useContext(UserProviders);
  return (
    <>
      <StyledList>
        {users.map((userData) => (
          <UserListItem userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;
