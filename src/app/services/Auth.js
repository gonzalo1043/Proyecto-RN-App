import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { api_key, auth_base_url } from '../../firebase/database'


export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({baseUrl: auth_base_url}),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (user) => ({
        url: `accounts:signUp?key=${api_key}`,
        method: 'POST',
        body: user
      })
    }),
    login: builder.mutation({
      query: (user) => ({
        url: `accounts:signInWithPassword?key=${api_key}`,
        method: 'POST',
        body: user
      })
    }),
  })
})

export const { useSignupMutation, useLoginMutation } = authApi

