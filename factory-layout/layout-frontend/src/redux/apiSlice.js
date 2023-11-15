import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8081/api/layouts" }),
  endpoints: (build) => ({
    updateTodos: build.mutation({
      query: () => ({
        url: "/save",
        method: "POST",
        body: {},
      }),
    }),
  }),
});

// Action creators are generated for each case reducer function
export const { useUpdateTodosMutation } = apiSlice;

export default SettingsSlice.reducer;
