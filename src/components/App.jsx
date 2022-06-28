import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SharedLayout from './SharedLayout';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export default function App () {
  return (
    <div
      style={{
        height: '100vh',
        color: '#010101'
      }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<LoginPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='contacts' element={<ContactsPage />}/>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
};
