import { ComponentWrapper as Wrapper } from 'components/atoms/ComponentWrapper/ComponentWrapper.styles';
import FormField from 'components/molecules/FormField/FormField';
import DefaultButton from 'components/atoms/Button/Button';

const Form = ({ addUser, changeInputValue, inputValues }) => {
  return (
    <>
      <Wrapper as="form" onSubmit={addUser}>
        <h2>Add new User</h2>
        <FormField
          id="Name"
          type="text"
          name="name"
          label="Name"
          value={inputValues.name}
          onChange={changeInputValue}
        />
        <FormField
          id="attendance"
          type="text"
          name="attendance"
          label="Attendance"
          value={inputValues.attendance}
          onChange={changeInputValue}
        />
        <FormField
          id="average"
          type="text"
          name="average"
          label="Average"
          value={inputValues.average}
          onChange={changeInputValue}
        />
        <DefaultButton ButtonText="Add User" />
      </Wrapper>
    </>
  );
};

export default Form;
