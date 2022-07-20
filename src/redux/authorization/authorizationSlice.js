import { createSlice } from '@reduxjs/toolkit';
import authorizationOperations from './authorizationOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authorizationSlice = createSlice ({
  name: 'authorization',
  initialState,
  extraReducers: {
    [authorizationOperations.createUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authorizationOperations.loginUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authorizationOperations.logoutUser.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authorizationOperations.getCurrentUserInfo.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [authorizationOperations.getCurrentUserInfo.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authorizationOperations.getCurrentUserInfo.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

export default authorizationSlice.reducer;
