import { React } from 'react';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { StyledList } from 'components/organisms/UsersList/UsersList.styles';
import { ComponentWrapper as Wrapper } from 'components/atoms/ComponentWrapper/ComponentWrapper.styles';
const UsersList = ({ deleteUser, usersData }) => {
  return (
    <>
      <Wrapper>
        <StyledList>
          {usersData.map((userData) => (
            <UserListItem filteredUsers={deleteUser} userData={userData} />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

export default UsersList;
