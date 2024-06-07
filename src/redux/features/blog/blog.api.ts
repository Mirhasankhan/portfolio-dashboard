import { baseApi } from "../../api/baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBlog: builder.mutation({
      query: (blogInfo) => ({
        url: "add-blog",
        method: "POST",
        body: blogInfo,
      }),
    }),
    getBlog: builder.query({
      query: () => ({
        url: "/blogs",
        method: "GET",
      }),
    }),
  }),
});

export const { useAddBlogMutation, useGetBlogQuery } = blogApi;
