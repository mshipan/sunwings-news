import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
  }),
  tagTypes: [
    "posts",
    "users",
    "logos",
    "category",
    "advertisements",
    "facebook",
    "twitter",
  ],
  endpoints: () => ({}),
});

export default baseApi;
