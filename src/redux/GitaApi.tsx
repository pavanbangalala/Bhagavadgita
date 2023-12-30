import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const geetaApi = createApi({
  reducerPath: 'geetaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://bhagavad-gita3.p.rapidapi.com/v2/',
  }),

  endpoints: builder => ({
    getChapters: builder.query({
      query: () => ({
        url: 'chapters/',
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '42cZGcaD5Lmshkwk1WDTptP9mSxFp142RZcjsn8lLuEPfIpVwu',
          'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com',
        },
      }),
    }),
    getVerses: builder.query({
      query: (id: string) => ({
        url: `chapters/${id}/verses/`,
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '42cZGcaD5Lmshkwk1WDTptP9mSxFp142RZcjsn8lLuEPfIpVwu',
          'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com',
        },
      }),
    }),
  }),
});

export const {useGetChaptersQuery, useGetVersesQuery} = geetaApi;
