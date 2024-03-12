import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
  }),
<<<<<<< HEAD
  tagTypes: ["posts", "users", "logos", "category"],
=======
  tagTypes: ["posts", "users", "logos"],
>>>>>>> 86c0348a7945154d7757e154b50cc8296ceb2c32
  endpoints: () => ({}),
});

export default baseApi;
