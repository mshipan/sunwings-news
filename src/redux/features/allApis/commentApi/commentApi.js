import baseApi from "../../baseApi";

const commentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addComment: builder.mutation({
      query: (data) => ({
        url: "/comments",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),

    getCommentById: builder.query({
      query: (id) => `/comments/${id}`,
      providesTags: ["comments"],
    }),
  }),
});

export const { useGetCommentByIdQuery, useAddCommentMutation } = commentApi;
