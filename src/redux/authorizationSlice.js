import { createSlice } from '@reduxjs/toolkit';
import { tokenKey, createUser, loginUser, logoutUser, getCurrentUserInfo } from '../service/connectionsApi';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authorizationSlice = createSlice ({
  name: 'authorization',
  initialState,
  extraReducers: {

  },
});
