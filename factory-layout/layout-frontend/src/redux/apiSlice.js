import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SettingsSlice } from "../components/SettingsCard/SettingsSlice.js";

export const apiSlice = createApi(
  const state = getS
  {
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8081/api/layouts" }),
  endpoints: (build) => ({
    save: build.mutation({
      query: () => ({
        url: "/save",
        method: "POST",
        body: {
          name: state.SettingsSlice.layoutName,
          direction: state.SettingsSlice.facingDirection,
          arrays: [
            [1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 2, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 3, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
          ],
        },
      }),
    }),
  }),
});

// Action creators are generated for each case reducer function
export const { useSaveMutation } = apiSlice;
