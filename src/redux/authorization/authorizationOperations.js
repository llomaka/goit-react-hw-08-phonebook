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

export const createUser = createAsyncThunk('register', async (userObject, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('users/signup', userObject);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
    return rejectWithValue(error);
  }
});

export const loginUser = createAsyncThunk('login', async (userObject, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('users/login', userObject);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
    return rejectWithValue(error);
  }
});

export const logoutUser = createAsyncThunk('logout', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/users/logout');
    token.unset();
    return data;
  } catch (error) {
    console.log(error.message);
    return rejectWithValue(error);
  }
});

export const getCurrentUserInfo = createAsyncThunk('current', async (_, { rejectWithValue, getState }) => {
  const state = getState();
  const persistedToken = state.authorization.token;
  if (!persistedToken) {
    return rejectWithValue('No logged in user!');
  }
  token.set(persistedToken);
  try {
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const operations = {
  createUser,
  loginUser,
  logoutUser,
  getCurrentUserInfo
};
export default operations;
