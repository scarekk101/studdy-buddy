import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputWrapper = styled.input`
  padding: 4px 20px;
  border-radius: 5px;
  /* border: 1px solid ${({ theme }) => theme.colors.darkGrey}; */
`;

const Input = ({ type, name, id, value, onChange }) => {
  return (
    <>
      <InputWrapper
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Input;
