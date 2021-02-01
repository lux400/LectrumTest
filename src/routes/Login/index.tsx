import React, { useState } from 'react';
import { Container, TextField, Grid, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { loginRequest } from '../../actions/auth';

const emailField = 'email';
const passwordField = 'password';

const Login = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    [emailField]: '',
    [passwordField]: '',
  });

  const onChange = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCredentials({
      ...credentials,
      [field]: e.target.value,
    });
  };

  const login = () => {
    dispatch(loginRequest(credentials));
  };

  return (
    <form>
      <Container fixed>
        <h1>Login</h1>
        <Grid container direction="column">
          <TextField
            label="Email"
            value={credentials.email}
            onChange={onChange(emailField)}
          />
          <TextField
            label="Password"
            type="password"
            value={credentials.password}
            onChange={onChange(passwordField)}
          />

          <Button variant="contained" color="primary" onClick={login}>
            Log in
          </Button>
        </Grid>
      </Container>
    </form>
  );
};

export default Login;
