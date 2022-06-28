import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authorizationApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com/' }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getCurrentUserInfo: builder.query({
      query: (auth_token) => ({
        url: '/users/current',
        token: auth_token,
      }),
      providesTags: ['User']
    }),
    createUser: builder.mutation ({
      query: (object) => ({
        url: '/users/signup',
        method: 'POST',
        body: object,
      }),
      invalidatesTags: ['User'],
    }),
    loginUser: builder.mutation ({
      query: (object) => ({
        url: '/users/login',
        method: 'POST',
        body: object,
      }),
      invalidatesTags: ['User'],
    }),
    logoutUser: builder.mutation ({
      query: (auth_token) => ({
        url: '/users/logout',
        method: 'POST',
        token: auth_token,
      }),
      invalidatesTags: ['User'],
    }),
  }),
})

export const {
  useGetCurrentUserInfoQuery,
  useCreateUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation
} = authorizationApi;
export default authorizationApi;
