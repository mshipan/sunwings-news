import baseApi from "../../baseApi";

const facebookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFacebook: builder.query({
      query: () => "/facebook",
      providesTags: ["facebook"],
    }),
    getFacebookById: builder.query({
      query: (id) => `/facebook/${id}`,
      providesTags: ["facebook"],
    }),
    updateFacebook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/facebook/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["facebook"],
    }),
  }),
});

export const {
  useGetAllFacebookQuery,
  useGetFacebookByIdQuery,
  useUpdateFacebookMutation,
} = facebookApi;
