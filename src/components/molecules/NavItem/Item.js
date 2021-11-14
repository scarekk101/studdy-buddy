import React from 'react';
import PropTypes from 'prop-types';
import { NavItem } from './Item.styles';

const Item = ({ linkName }) => {
  return <NavItem>{linkName}</NavItem>;
};

Item.propTypes = {
  linkName: PropTypes.string.isRequired,
};

export default Item;
