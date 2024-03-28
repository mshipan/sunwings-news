import baseApi from "../../baseApi";

const bodyThemeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBodyTheme: builder.query({
      query: () => "/body-theme",
      providesTags: ["bodyTheme"],
    }),
    updateBodyBg: builder.mutation({
      query: ({ id, bodyBg }) => ({
        url: `/body-theme/${id}`,
        method: "PUT",
        body: { bodyBg },
      }),
      invalidatesTags: ["bodyTheme"],
    }),
    updateNewsCard: builder.mutation({
      query: ({ id, newscardTitleFontSize, newscardTitleFontColor }) => ({
        url: `/body-theme/${id}`,
        method: "PUT",
        body: { newscardTitleFontSize, newscardTitleFontColor },
      }),
      invalidatesTags: ["bodyTheme"],
    }),
    updateMarque: builder.mutation({
      query: ({ id, marqueTitleFontSize, marqueTitleFontColor, marqueBg }) => ({
        url: `/body-theme/${id}`,
        method: "PUT",
        body: { marqueTitleFontSize, marqueTitleFontColor, marqueBg },
      }),
      invalidatesTags: ["bodyTheme"],
    }),
    updateMenu: builder.mutation({
      query: ({ id, menuTitleFontSize, menuTitleFontColor, menuBg }) => ({
        url: `/body-theme/${id}`,
        method: "PUT",
        body: { menuTitleFontSize, menuTitleFontColor, menuBg },
      }),
      invalidatesTags: ["bodyTheme"],
    }),
    updateMoreNews: builder.mutation({
      query: ({ id, moreNewsTitleFontColor, moreNewsTitleFontSize }) => ({
        url: `/body-theme/${id}`,
        method: "PUT",
        body: { moreNewsTitleFontColor, moreNewsTitleFontSize },
      }),
      invalidatesTags: ["bodyTheme"],
    }),
  }),
});
export const {
  useGetBodyThemeQuery,
  useUpdateBodyBgMutation,
  useUpdateNewsCardMutation,
  useUpdateMarqueMutation,
  useUpdateMenuMutation,
  useUpdateMoreNewsMutation,
} = bodyThemeApi;
