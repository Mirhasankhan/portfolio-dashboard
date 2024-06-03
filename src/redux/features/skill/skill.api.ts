import { baseApi } from "../../api/baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addSkill: builder.mutation({
      query: (skillInfo) => ({
        url: "add-skill",
        method: "POST",
        body: skillInfo,
      }),
    }),
  }),
});

export const { useAddSkillMutation } = cartApi;
