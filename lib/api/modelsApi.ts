import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Endpoints }  from '@/conf/cfg';
interface UnitCosts {
  input?: string;
  output?: string;
  image?: number;
}

interface Model {
  id: string;
  object: string;
  proxy_to?: string;
  owned_by?: string;
  limit?: string;
  unit_costs?: UnitCosts;
  allowed_for: string[];
  max_images?: number;
  multiple_of?: number;
  unit_cost?: string;
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