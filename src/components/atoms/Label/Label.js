import React from 'react';
import PropTypes from 'prop-types';
import { LabelStyled } from './Label.styled';

const Label = ({ id, label }) => {
  return <LabelStyled htmlFor={id}>{label}</LabelStyled>;
};

Label.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Label;
