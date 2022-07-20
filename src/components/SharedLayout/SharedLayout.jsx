import { Suspense } from 'react';
import NavigationBar from 'components/NavigationBar';
import Container from 'components/Container';
import Notification from '../Notification';
import { Outlet } from 'react-router-dom';
import MainHeader from 'components/MainHeader';
import AuthNavigationBar from 'components/AuthNavigationBar';
import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/authorization';
import styles from './SharedLayout.module.css';

export default function SharedLayout() {
  const isUserLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <MainHeader>
        <Container>
          <div className={styles.menuWrapper}>
          <NavigationBar />
          {!isUserLoggedIn && <AuthNavigationBar />}
          {isUserLoggedIn && <UserMenu />}
          </div>
        </Container>
      </MainHeader>
      <main>
        <Container>
          <Suspense fallback={<Notification text='Loading Interface...' />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};
