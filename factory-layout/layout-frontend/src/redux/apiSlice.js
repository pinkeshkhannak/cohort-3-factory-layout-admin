// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

// const api = createApi({
//   baseQuery: fetchBaseQuery({
//     baseUrl: "/api/layouts",
//   }),
//   tagTypes: ["Post"],
//   endpoints: (build) => ({
//     // The query accepts a number and returns a Post
//     getPost: build.query({
//       // note: an optional `queryFn` may be used in place of `query`
//       query: () => ({ url: `save` }),
//       // Pick out data and prevent nested properties in a hook or selector
//       transformResponse: (response, meta, arg) => response.data,
//       // Pick out errors and prevent nested properties in a hook or selector
//       transformErrorResponse: (response, meta, arg) => response.status,
//       providesTags: (result, error, id) => [{ type: "Post", id }],
//       // The 2nd parameter is the destructured `QueryLifecycleApi`
//       async onQueryStarted(arg, { dispatch, getState, extra, requestId, queryFulfilled, getCacheEntry, updateCachedData }) {},
//       // The 2nd parameter is the destructured `QueryCacheLifecycleApi`
//       async onCacheEntryAdded(
//         arg,
//         { dispatch, getState, extra, requestId, cacheEntryRemoved, cacheDataLoaded, getCacheEntry, updateCachedData }
//       ) {},
//     }),
//   }),
// });
