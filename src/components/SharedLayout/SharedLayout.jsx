import { Suspense } from 'react';
import NavigationBar from 'components/NavigationBar';
import Notification from '../Notification';
import { Outlet } from 'react-router-dom';
import MainHeader from 'components/MainHeader';
import AuthNavigationBar from 'components/AuthNavigationBar';
import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/authorization';
import Container from '@mui/material/Container';
import styles from './SharedLayout.module.css';

export default function SharedLayout() {
  const isUserLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <MainHeader>
        <Container maxWidth='xl'>
          <div className={styles.menuWrapper}>
          <NavigationBar />
          {!isUserLoggedIn && <AuthNavigationBar />}
          {isUserLoggedIn && <UserMenu />}
          </div>
        </Container>
      </MainHeader>
      <main>
        <Container maxWidth='xl'>
          <Suspense fallback={<Notification text='Loading Interface...' />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};
