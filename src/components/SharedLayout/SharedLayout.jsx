import { Suspense } from 'react';
import AppNameBar from 'components/AppNameBar';
import { Typography, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import AuthNavigationBar from 'components/AuthNavigationBar';
import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/authorization';

export default function SharedLayout() {
  const isUserLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <Header>
        <Container maxWidth='xl' sx={{display: 'flex', justifyContent: 'space-between'}}>
          <AppNameBar />
          {!isUserLoggedIn && <AuthNavigationBar />}
          {isUserLoggedIn && <UserMenu />}
        </Container>
      </Header>
      <main>
        <Container maxWidth='xl'>
          <Suspense fallback={<Typography variant='h2' align='center'>Loading Interface...</Typography>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};
