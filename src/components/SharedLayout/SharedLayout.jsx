import { Suspense } from 'react';
import AppNameBar from 'components/AppNameBar';
import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router-dom';
import MainHeader from 'components/MainHeader';
import AuthNavigationBar from 'components/AuthNavigationBar';
import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/authorization';
import Container from '@mui/material/Container';

export default function SharedLayout() {
  const isUserLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <MainHeader>
        <Container maxWidth='xl' sx={{display: 'flex', justifyContent: 'space-between'}}>
          <AppNameBar />
          {!isUserLoggedIn && <AuthNavigationBar />}
          {isUserLoggedIn && <UserMenu />}
        </Container>
      </MainHeader>
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
