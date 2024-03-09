import baseApi from "../../baseApi";

const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      providesTags: ["posts"],
    }),

    addNewPost: builder.mutation({
      query: ({ data }) => ({
        url: "/posts",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["posts"],
    }),
  }),
});

export const { useGetPostsQuery } = postApi;
