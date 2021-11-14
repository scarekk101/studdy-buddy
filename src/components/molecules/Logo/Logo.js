import React from 'react';
import PropTypes from 'prop-types';
import { LogoItem } from './Logo.styles';

const Logo = ({ logoText }) => {
  return <LogoItem>{logoText}</LogoItem>;
};

Logo.propTypes = {
  logoText: PropTypes.string.isRequired,
};

export default Logo;
