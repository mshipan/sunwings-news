import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
  }),
<<<<<<< HEAD
  tagTypes: ["posts", "category"],
=======
  tagTypes: ["posts", "users", "logos"],
>>>>>>> 1496ae9393106384085c401b484fe2af88186fce
  endpoints: () => ({}),
});

export default baseApi;
