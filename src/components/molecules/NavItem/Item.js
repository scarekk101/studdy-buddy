import React from 'react';
import PropTypes from 'prop-types';
import { NavItem } from './Item.styles';

const Item = ({ linkName, linkURL }) => {
  return <NavItem to={linkURL}>{linkName}</NavItem>;
};

Item.propTypes = {
  linkName: PropTypes.string.isRequired,
  linkURL: PropTypes.string.isRequired,
};

export default Item;
