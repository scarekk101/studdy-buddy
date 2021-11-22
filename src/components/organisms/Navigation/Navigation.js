import React from 'react';
import Item from 'components/molecules/NavItem/Item';
import { NavigationWrapper } from './Navigation.styles';
import Logo from 'components/molecules/Logo/Logo';

const Navigation = (props) => {
  return (
    <NavigationWrapper>
      <Logo logoText={'Studdy Buddy'} />
      <Item linkName={'Dashboard'} linkURL="/" />
      <Item linkName={'Add User'} linkURL="/AddUser" />
      <Item linkName={'Settings'} linkURL="/" />
      <Item linkName={'Logout'} linkURL="/" />
    </NavigationWrapper>
  );
};

export default Navigation;
