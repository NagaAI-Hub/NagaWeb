import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Endpoints } from "@/conf/cfg";
import { keepCacheFor } from "@/conf/cfg";
interface LimitTier {
  [tierName: string]: [number, string][];
}

interface Limit {
  id: string;
  object: string;
  tiers: LimitTier;
}

export const limitsApi = createApi({
  reducerPath: "limitsApi",
  baseQuery: fetchBaseQuery({ baseUrl: Endpoints.NAGA_BASE_URL }),
  endpoints: (builder) => ({
    fetchLimits: builder.query<Limit[], void>({
      query: () => "limits",
      transformResponse: (response: { data: Limit[] }) => response.data,
    }),
  }),
  keepUnusedDataFor: keepCacheFor,
});

export const { useFetchLimitsQuery } = limitsApi;
