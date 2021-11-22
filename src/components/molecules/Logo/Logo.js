import React from 'react';
import PropTypes from 'prop-types';
import { LogoWrapper, LogoHeader } from './Logo.styles';

const Logo = ({ logoText }) => {
  return (
    <LogoWrapper>
      <LogoHeader>{logoText}</LogoHeader>
    </LogoWrapper>
  );
};

Logo.propTypes = {
  logoText: PropTypes.string.isRequired,
};

export default Logo;
