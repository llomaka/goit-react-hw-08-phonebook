import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const createUser = createAsyncThunk('register', async (userObject) => {
  try {
    const { data } = await axios.post('users/signup', userObject);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const loginUser = createAsyncThunk('login', async (userObject) => {
  try {
    const { data } = await axios.post('users/login', userObject);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const logoutUser = createAsyncThunk('logout', async () => {
  try {
    const { data } = await axios.post('/users/logout');
    token.unset();
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const getCurrentUserInfo = createAsyncThunk('current', async persistedToken => {
  if (!persistedToken) {
    throw Error('user');
  }
  token.set(persistedToken);
  try {
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    return error;
  }
});

const operations = {
  createUser,
  loginUser,
  logoutUser,
  getCurrentUserInfo
};
export default operations;
