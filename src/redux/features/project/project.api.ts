import { baseApi } from "../../api/baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProject: builder.mutation({
      query: (projectInfo) => ({
        url: "add-project",
        method: "POST",
        body: projectInfo,
      }),
    }),
  }),
});

export const { useCreateProjectMutation } = cartApi;
