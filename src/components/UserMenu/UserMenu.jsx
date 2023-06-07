import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { Wrapper, Username } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Username>Welcome, {user.name}!</Username>
      <Button
        type="button"
        color="inherit"
        onClick={() => dispatch(logOut())}
        endIcon={<LogoutIcon />}
      >
        Log Out
      </Button>
    </Wrapper>
  );
};
