import PropTypes from 'prop-types';
import Label from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormField = ({ label, id, name, type = 'text', value, onChange }) => {
  return (
    <Wrapper>
      <Label id={id} label={label} />
      <Input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default FormField;
