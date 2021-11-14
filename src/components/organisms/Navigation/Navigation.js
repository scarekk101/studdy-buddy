import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/molecules/NavItem/Item';
import { NavigationWrapper } from './Navigation.styles';
import Logo from 'components/molecules/Logo/Logo';

const Navigation = (props) => {
  return (
    <NavigationWrapper>
      <Logo logoText={`Studdy Buddy`} />
      <Item linkName={'Dashboard'} />
      <Item linkName={'Settings'} />
      <Item linkName={'Add User'} />
      <Item linkName={'Logout'} />
    </NavigationWrapper>
  );
};

Navigation.propTypes = {
  linkName: PropTypes.string.isRequired,
};

export default Navigation;
