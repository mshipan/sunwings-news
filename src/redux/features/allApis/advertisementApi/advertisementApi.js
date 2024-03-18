import baseApi from "../../baseApi";

const advertisementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAdvertisement: builder.query({
      query: () => "/advertisements",
      providesTags: ["advertisements"],
    }),
    uploadAnAdvertisement: builder.mutation({
      query: (data) => ({
        url: "/advertisements",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["advertisements"],
    }),
    updateAdSelection: builder.mutation({
      query: ({ id, isSelected }) => ({
        url: `/advertisements/${id}`,
        method: "PATCH",
        body: { isSelected },
      }),
      invalidatesTags: ["advertisements"],
    }),
  }),
});

export const {
  useGetAllAdvertisementQuery,
  useUploadAnAdvertisementMutation,
  useUpdateAdSelectionMutation,
} = advertisementApi;
