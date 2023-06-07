import { Link } from './Navigation.styled';
import { useAuth } from 'hooks';
import Button from '@mui/material/Button';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      {!isLoggedIn && (
        <Link to="/">
          <Button color="inherit" size="large">
            PhoneBook
          </Button>
        </Link>
      )}

      {isLoggedIn && <Link to="/contacts">Contact List</Link>}
    </nav>
  );
};
