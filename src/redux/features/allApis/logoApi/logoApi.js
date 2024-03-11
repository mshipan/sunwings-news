import baseApi from "../../baseApi";

const logoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllLogo: builder.query({
      query: () => "/logos",
      providesTags: ["logos"],
    }),
    uploadALogo: builder.mutation({
      query: (data) => ({
        url: "/logos",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["logos"],
    }),
  }),
});

export const { useGetAllLogoQuery, useUploadALogoMutation } = logoApi;
