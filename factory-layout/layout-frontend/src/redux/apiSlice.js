import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8081/api/layouts" }),
  endpoints: (build) => ({
    save: build.mutation({
      query: (action) => ({
        url: "/save",
        method: "POST",
        body: action,
      }),
    }),
  }),
});

// Action creators are generated for each case reducer function
export const { useSaveMutation } = apiSlice;
