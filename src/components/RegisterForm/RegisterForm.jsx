import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Link, Box, Form, Title, Text } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (name === '' || email === '' || password === '') {
      alert(`Empty! Please fill all fields to Register`);
    } else {
      const result = await dispatch(
        register({
          name,
          email,
          password,
        })
      );

      if (register.rejected.match(result)) {
        alert(`You entered incorrect data`);
      } else {
        form.reset();
      }
    }
  };

  return (
    <Box>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Title>Create an account</Title>
        <p>
          Already have an account?
          <Link to="/login">
            <Button type="button" color="inherit" size="small">
              Login
            </Button>
          </Link>
        </p>
        <TextField
          label="Username"
          type="text"
          name="name"
          size="small"
          margin="normal"
        />

        <TextField
          label="Email"
          type="email"
          name="email"
          size="small"
          margin="normal"
        />

        <TextField
          label="Password"
          type="password"
          name="password"
          size="small"
          margin="normal"
        />
        <Text>
          By creating an account, you agree to our Terms of Use and Privacy
          Policy.
        </Text>
        <Button type="submit" variant="contained">
          Register
        </Button>
      </Form>
    </Box>
  );
};
