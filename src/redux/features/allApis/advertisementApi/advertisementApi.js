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
  }),
});

export const { useGetAllAdvertisementQuery, useUploadAnAdvertisementMutation } =
  advertisementApi;
