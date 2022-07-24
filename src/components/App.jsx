import { lazy, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authOperations, authSelectors } from 'redux/authorization';
import SharedLayout from './SharedLayout';
import { Box, CssBaseline, useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export default function App() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrentUser);
  const dispatch = useDispatch();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode: prefersDarkMode ? 'dark' : 'light',
      },
  }), [prefersDarkMode]);

  useEffect(() => {
    dispatch(authOperations.getCurrentUserInfo());
  }, [dispatch]);

  return (!isFetchingCurrentUser && <Box
    style={{
      height: '100vh',
    }}
  >
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
    </ThemeProvider>
  </Box>
  );
}
