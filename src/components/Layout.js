import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ButtonAppBar from './AppBar/AppBar';
import { Suspense } from 'react';
import { Helmet } from 'react-helmet';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 16px' }}>
      <Helmet title="PhoneBook official page" />
      <ButtonAppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
