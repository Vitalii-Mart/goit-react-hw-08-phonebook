import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import PropTypes from 'prop-types';
import { Label, Title, Form, Box } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === '' || password === '') {
      alert(`Empty! Please enter valid email and password to Log In`);
      return;
    }

    const result = await dispatch(logIn({ email, password }));

    if (logIn.rejected.match(result)) {
      alert(`You entered incorrect data`);
    } else {
      form.reset();
    }
  };

  return (
    <Box>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Title>Enter your details to sign in </Title>
        <TextField
          type="email"
          name="email"
          size="small"
          margin="normal"
          label="Email"
        />
        <Label>
          <TextField
            type="password"
            name="password"
            size="small"
            margin="normal"
            label="Password"
          />
        </Label>
        <Button type="submit" variant="contained">
          Log In
        </Button>
      </Form>
    </Box>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
};
