import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { authOperations } from 'redux/authorization';
import SharedLayout from './SharedLayout';
import PrivateRoute from './PrivateRoute';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUserInfo());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route element={<PrivateRoute />}>
            <Route path='contacts' element={<ContactsPage />} />
          </Route>
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
        </Route>
      </Routes>
    </div>
  );
};
