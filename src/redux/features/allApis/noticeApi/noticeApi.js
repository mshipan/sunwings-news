import baseApi from "../../baseApi";
const noticeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // add notice
    addNotice: builder.mutation({
      query: (data) => ({
        url: "/notice",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["notice"],
    }),
    // get notice
    getNotice: builder.query({
      query: () => "/notice",
      providesTags: ["notice"],
    }),
  }),
});
export const { useAddNoticeMutation } = noticeApi;
