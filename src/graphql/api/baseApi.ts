import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';

export const api = createApi({
  reducerPath: 'graphql',
  baseQuery: graphqlRequestBaseQuery({
    url: 'https://rickandmortyapi.com/graphql',
    prepareHeaders(headers) {
      headers.set('x-api-key', 'asdASDASda34sasdaSDad');

      return headers;
    },
  }),
  endpoints: () => ({}),
});
