import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import {
  Wrapper,
  AverageInfo,
  UserInfo,
} from 'components/molecules/UserListItem/UserListItem.styles';

const UserListItem = ({ filteredUsers, userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <AverageInfo value={average}> {average}</AverageInfo>
    <div>
      <UserInfo>{name}</UserInfo>
      <UserInfo>Attendance: {attendance}</UserInfo>
    </div>
    <Button onClick={() => filteredUsers(name)} />
  </Wrapper>
);

UserListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string,
    name: PropTypes.string,
    attendance: PropTypes.string,
  }),
};

export default UserListItem;
