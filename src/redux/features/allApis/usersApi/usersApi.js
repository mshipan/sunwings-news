import baseApi from "../../baseApi";

const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/users",
      providesTags: ["users"],
    }),
  }),
});

export const { useGetAllUsersQuery } = usersApi;
