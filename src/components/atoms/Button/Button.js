import React from 'react';
import { Button } from './Button.styled';

const DefaultButton = ({ ButtonText }) => {
  return <Button>{ButtonText}</Button>;
};

Button.propTypes = {};

export default DefaultButton;
