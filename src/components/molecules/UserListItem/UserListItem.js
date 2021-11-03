import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  padding: 25px 0;

  &:not(:last-child):after {
    content: '';
    display: block;
    position: absolute;
    height: 1px;
    width: 100%;
    bottom: 0;
    background-color: lightgrey;
  }
`;

const UserInfo = styled.p`
  margin: 0 20px;
`;

const AverageInfo = styled.div`
  border-radius: 50px;
  background: ${({ theme, value }) => value >= 4 ? theme.colors.success : value >= 3 ? theme.colors.lightGrey : value >= 2 ? theme.colors.warning : theme.colors.error};
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  cursor: default;
`;

const UserListItem = ({ userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <AverageInfo value={average}> {average}</AverageInfo>
    <div>
      <UserInfo>{name}</UserInfo>
      <UserInfo>Attendance: {attendance}</UserInfo>
    </div>
    <Button />
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
