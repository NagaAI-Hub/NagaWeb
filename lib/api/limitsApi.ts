import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Endpoints }  from '@/conf/cfg';

interface Limit {
    free: [number, string][];
    paid: [number, string][];
  }
  

export const limitsApi = createApi({
  reducerPath: 'limitsApi',
  baseQuery: fetchBaseQuery({ baseUrl: Endpoints.NAGA_BASE_URL }),
  endpoints: (builder) => ({
    fetchLimits: builder.query<Limit[], void>({
      query: () => 'limits',
    }),
  }),
});

export const { useFetchLimitsQuery } = limitsApi;