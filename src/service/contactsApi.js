import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().authorization.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers;
  },
  }),
  tagTypes: ['Contact'],
  endpoints: (builder) => ({
    getAllContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact']
    }),
    postContact: builder.mutation ({
      query: (object) => ({
        url: '/contacts',
        method: 'POST',
        body: object,
      }),
      invalidatesTags: ['Contact'],
    }),
    editContactById: builder.mutation ({
      query: ({ id, ...rest }) => ({
        url: `/contacts/${id}`,
        method: 'PATCH',
        body: rest,
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContactById: builder.mutation ({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
})

export const {
  useGetAllContactsQuery,
  usePostContactMutation,
  useEditContactByIdMutation,
  useDeleteContactByIdMutation
} = contactsApi;
export default contactsApi;
