import baseApi from "../../baseApi";
const noticeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get notice
    getGetNotice: builder.query({
      query: () => "/notice",
      providesTags: ["notice"],
    }),

    // add notice
    addNotice: builder.mutation({
      query: (data) => ({
        url: "/notice",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["notice"],
    }),

    // patch is opened value
    addIsOpened: builder.mutation({
      query: (email) => ({
        url: `/notice/isOpened/${email}`,
        method: "PATCH",
      }),
      invalidatesTags: ["notice"],
    }),
    //   get is opened value
    getIsOpened: builder.query({
      query: (email) => `/notice/isOpened/${email}`,
      invalidatesTags: ["notice"],
    }),
  }),
});
export const {
  useAddNoticeMutation,
  useGetGetNoticeQuery,
  useAddIsOpenedMutation,
  useGetIsOpenedQuery,
} = noticeApi;
