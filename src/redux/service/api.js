import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiService = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => ({
        url: 'restaurants',
      }),
    }),

    getMenu: builder.query({
      query: (restaurantId) => ({
        url: 'dishes',
        params: { restaurantId },
      }),
    }),

    getReviews: builder.query({
      query: (restaurantId) => ({
        url: 'reviews',
        params: { restaurantId },
      }),
    }),

    getDish: builder.query({
      query: (dishId) => ({
        url: `dish/${dishId}`,
      }),
    }),

    getUsers: builder.query({
      query: (userId) => ({
        url: 'users',
        params: { userId },
      }),
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetMenuQuery,
  useGetReviewsQuery,
  useGetUsersQuery,
  useGetDishQuery,
} = apiService;
