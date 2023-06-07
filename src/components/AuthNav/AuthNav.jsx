import Button from '@mui/material/Button';
import { Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <Link to="/register">
        <Button color="inherit">Register</Button>
      </Link>
      <Link to="/login">
        <Button color="inherit">Log In</Button>
      </Link>
    </div>
  );
};
