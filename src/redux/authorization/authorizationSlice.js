import { createSlice } from '@reduxjs/toolkit';
import authorizationOperations from './authorizationOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  isCreatingUser: false,
  isSigningInUser: false,
};

const authorizationSlice = createSlice ({
  name: 'authorization',
  initialState,
  extraReducers: {
    [authorizationOperations.createUser.pending](state) {
      state.isCreatingUser = true;
    },
    [authorizationOperations.createUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isCreatingUser = false;
    },
    [authorizationOperations.createUser.rejected](state) {
      state.isCreatingUser = false;
    },
    [authorizationOperations.loginUser.pending](state) {
      state.isSigningInUser = true;
    },
    [authorizationOperations.loginUser.fulfilled](state, action) {
      if (action.payload.user === 'AxiosError') {
        console.log('user', action.payload.user, state);
        return state = initialState;
      }
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isSigningInUser = false;
      console.log(state);
    },
    [authorizationOperations.loginUser.rejected](state) {
      console.log(state);
      state.isSigningInUser = false;
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
