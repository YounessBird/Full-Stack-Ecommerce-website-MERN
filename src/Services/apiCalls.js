import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYyM2MzOGVjMmRlYjI5OGVmMjI1YTkiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MzQyODg3NDEsImV4cCI6MTYzNDU0Nzk0MX0.4E-S-dFYYZFAyeuG2G12sAOr8DjykptHnR16Wkpah_w";
export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  tagTypes: [
    "Product",
    "Category",
    "Products",
    "UNAUTHORIZED",
    "UNKNOWN_ERROR",
  ],
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: (id) => `product/find/${id}`,
      headers: {
        "auth-token": `Bearer ${TOKEN}`,
      },
      providesTags: (result, error, id) =>
        cacheTagsSetup(result, "Product", id, error, false),
    }),
    getByCategory: builder.query({
      query: (category) => `product?category=${category}`,
      providesTags: (result, error, category) =>
        cacheTagsSetup(result, "Category", category, error, false),
    }),
    getAllProducts: builder.query({
      query: () => `product`,
      providesTags: (result, error) =>
        cacheTagsSetup(result, "Products", error, true),
    }),
    login: builder.mutation({
      query: (user) => ({
        url: "/auth/login",
        method: "POST",
        body: user,
      }),
      // on successful login, will refetch all currently
      // 'UNAUTHORIZED' queries
      invalidatesTags: (result) => (result ? ["UNAUTHORIZED"] : []),
    }),

    refetchErroredQueries: builder.mutation({
      queryFn: () => ({ data: null }),
      invalidatesTags: ["UNKNOWN_ERROR"],
    }),
  }),
});

//helper function
function cacheTagsSetup(resultsWithArgs, tagType, arg, error, isArray) {
  return isArray
    ? resultsWithArgs
      ? resultsWithArgs.map(({ _id }) => ({ type: tagType, _id }))
      : error?.status === 401
      ? ["UNAUTHORIZED"]
      : ["UNKNOWN_ERROR"]
    : resultsWithArgs
    ? [{ type: tagType, arg }]
    : error?.status === 401
    ? ["UNAUTHORIZED"]
    : ["UNKNOWN_ERROR"];
}

export const {
  useGetProductQuery,
  useGetAllProductsQuery,
  useGetByCategoryQuery,
  useLoginQuery,
} = shopApi;
