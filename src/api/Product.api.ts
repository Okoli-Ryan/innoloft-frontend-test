import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IProduct } from '../interfaces/Product';

export const ProductApi = createApi({
	reducerPath: "ProductApi",
	tagTypes: ["Product"],
	baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL }),
	endpoints: (build) => ({
		getProduct: build.query<IProduct, void>({
			query: () => ({
				url: "/product/6781/",
				method: "GET",
			}),
		}),
		updateProduct: build.query<IProduct, Partial<IProduct>>({
			query: () => ({
				url: "/product/6781/",
				method: "PUT",
			}),
		}),
	}),
});

export const { useGetProductQuery, useLazyUpdateProductQuery } = ProductApi;
