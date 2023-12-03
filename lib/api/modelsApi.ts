import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {Core, Endpoints}  from '@/conf/cfg';
interface Model {
  id: string;
  // other fields...
}

export const modelsApi = createApi({
  reducerPath: 'modelsApi',
  baseQuery: fetchBaseQuery({ baseUrl: Endpoints.NAGA_BASE_URL }),
  endpoints: (builder) => ({
    fetchModels: builder.query<Model[], void>({
      query: () => 'models',
    }),
  }),
});

export const { useFetchModelsQuery } = modelsApi;