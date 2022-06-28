import { Suspense } from 'react';
import NavigationBar from 'components/NavigationBar';
import Container from 'components/Container';
import Notification from '../Notification';
import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';

export default function SharedLayout() {
  return (
    <>
      <NavigationBar />
      <main>
        <Container>
          <Suspense fallback={<Notification text='Loading Interface...' />}>
            <Outlet />
          </Suspense>
        </Container>
        <ToastContainer
          position='top-center'
          newestOnTop={true}
          autoClose={3000}
          style={{ fontSize: '20px' }}
          theme='colored'
        />
      </main>
    </>
  );
};
