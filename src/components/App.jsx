import { lazy, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authOperations, authSelectors } from 'redux/authorization';
import SharedLayout from './SharedLayout';
import { Box } from '@mui/material';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export default function App() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUserInfo());
  }, [dispatch]);

  return (!isFetchingCurrentUser && <Box
      style={{
        height: '100vh',
      }}
    >
      <Routes>
        <Route path="/*" element={<SharedLayout />}>
          {isLoggedIn && <Route path='contacts' element={<ContactsPage />} />}
          {!isLoggedIn && <>
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />
          </>}
          <Route path='*' element={<Navigate to={isLoggedIn ? '/contacts' : '/login'} replace />} />
        </Route>
      </Routes>
    </Box>
  );
};
