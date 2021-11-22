import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/DeleteButton/DeleteButton';
import {
  Wrapper,
  AverageInfo,
  UserInfo,
} from 'components/molecules/UserListItem/UserListItem.styles';
import { UserProviders } from 'providers/UserProvider';

const UserListItem = ({ userData: { average, name, attendance } }) => {
  const { deleteUser } = useContext(UserProviders);
  return (
    <Wrapper>
      <AverageInfo value={average}> {average}</AverageInfo>
      <div>
        <UserInfo>{name}</UserInfo>
        <UserInfo>Attendance: {attendance}</UserInfo>
      </div>
      <Button onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

UserListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string,
    name: PropTypes.string,
    attendance: PropTypes.string,
  }),
};

export default UserListItem;
