import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

export default function ButtonAppBar() {
  const { isLoggedIn } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
            <Navigation />
          </Typography>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
