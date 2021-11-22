import { ViewWrapper } from 'templates/ViewWrapper/ViewWrapper';
import React, { useContext, useState } from 'react';
import FormField from 'components/molecules/FormField/FormField';
import DefaultButton from 'components/atoms/Button/Button';
import { UserProviders } from 'providers/UserProvider';

const Form = () => {
  const UserDatas = useContext(UserProviders);
  const [inputValues, setInputValue] = useState({});

  function changeInputValue(e) {
    setInputValue({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  }

  function handleAddUser(e) {
    e.preventDefault();
    UserDatas.addUser(inputValues);
    setInputValue({
      average: '',
      name: '',
      attendance: '',
    });
  }

  return (
    <>
      <ViewWrapper as="form" onSubmit={handleAddUser}>
        <h2>Add new User</h2>
        <FormField
          id="name"
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
      </ViewWrapper>
    </>
  );
};

export default Form;
