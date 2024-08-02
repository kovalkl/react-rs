import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Person } from '@/models/types';

type PersonState = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Person[];
};

type QueryParams = {
  page: string;
  searchText?: string;
};

const BASE_URL = 'https://swapi.dev/api/people/';

export const peopleApi = createApi({
  reducerPath: 'peopleApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPeople: builder.query<PersonState, QueryParams>({
      query: ({ page, searchText }) =>
        `?${searchText !== '' ? `search=${searchText}&` : ''}page=${page}`,
    }),
    getPersonById: builder.query<Person, string>({
      query: (id) => `${id}`,
    }),
  }),
});

export const { useGetPeopleQuery, useGetPersonByIdQuery } = peopleApi;
