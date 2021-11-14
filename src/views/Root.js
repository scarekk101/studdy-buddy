import { React, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import UsersList from 'components/organisms/UsersList/UsersList';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/Theme';
import { users } from 'data/users';
import Form from 'components/organisms/Form/Form';
import Navigation from 'components/organisms/Navigation/Navigation';

const Wrapper2 = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Root = () => {
  const [usersData, setUsers] = useState(users);
  console.log(usersData);
  const [inputValues, setInputValue] = useState({
    average: '',
    name: '',
    attendance: '',
  });

  function deleteUser(name) {
    const filteredUsers = usersData.filter((nameItem) =>
      nameItem.name !== name ? nameItem : null
    );
    setUsers(filteredUsers);
  }

  function changeInputValue(e) {
    setInputValue({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  }

  function addUser(e) {
    e.preventDefault();
    const newUser = {
      average: inputValues.average,
      name: inputValues.name,
      attendance: inputValues.attendance,
    };
    setUsers((users) => [...users, newUser]);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper2>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <UsersList deleteUser={deleteUser} usersData={usersData} />
            }
          />

          <Route
            path="/addUser"
            element={
              <Form
                addUser={addUser}
                changeInputValue={changeInputValue}
                inputValues={inputValues}
              />
            }
          />
        </Routes>
      </Wrapper2>
    </ThemeProvider>
  );
};

export default Root;
