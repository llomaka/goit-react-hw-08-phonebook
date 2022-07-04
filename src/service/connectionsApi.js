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

export const getCurrentUserInfo = createAsyncThunk('contacts', async persistedToken => {
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

export const getAllContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const postContact = async (contactObject) => {
  const { data } = await axios.post('/contacts', contactObject);
  return data;
};

export const editContactById = async (contactId, ...rest) => {
  const { data } = await axios.patch(`/contacts/${contactId}`, rest);
  return data;
};

export const deleteContactById = async (contactId) => {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
};

// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// const fetchCurrentUserInfo = createAsyncThunk(
//   '/users/current',
//   async (userId: number, thunkAPI) => {
//     const response = await authorizationApi.getCurrentUserInfo()
//     return response.data
//   }
// )

// interface AuthState {
//   token: '',
//   loading: 'idle' | 'pending' | 'succeeded' | 'failed'
// }

// const initialState = {
//   token: '',
//   loading: 'idle',
// } as AuthState

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {

//   },
//   extraReducers: (builder) => {

//     builder.addCase(getCurrentUserInfo.fulfilled, (state, action) => {
//       state.entities.push(action.payload)
//     })
//   },
// })


// export const authorizationApi = createApi({
//   reducerPath: 'users',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com/',
//     // prepareHeaders: (headers, {getState}) => {
//     //   const token = getState().auth.token;
//     //   if (token) {
//     //     headers.set('authorization', `Bearer ${token}`);
//     //   }
//     //   headers.set('Access-Control-Allow-Origin', '*');
//     //   return headers;
//     // },
//   }),
//   tagTypes: ['User'],
//   endpoints: (builder) => ({
//     getCurrentUserInfo: builder.query({
//       query: (auth_token) => ({
//         url: '/users/current',
//         headers: { Authorization: auth_token },
//       }),
//       providesTags: ['User']
//     }),
//     createUser: builder.mutation ({
//       query: (object) => ({
//         url: '/users/signup',
//         method: 'POST',
//         body: object,
//       }),
//       invalidatesTags: ['User'],
//     }),
//     loginUser: builder.mutation ({
//       query: (object) => ({
//         url: '/users/login',
//         method: 'POST',
//         body: object,
//       }),
//       invalidatesTags: ['User'],
//     }),
//     logoutUser: builder.mutation ({
//       query: (auth_token) => ({
//         url: '/users/logout',
//         method: 'POST',
//         headers: { Authorization: auth_token },
//       }),
//       invalidatesTags: ['User'],
//     }),
//   }),
// })

// export const {
//   useGetCurrentUserInfoQuery,
//   useCreateUserMutation,
//   useLoginUserMutation,
//   useLogoutUserMutation
// } = authorizationApi;
// export default authorizationApi;
