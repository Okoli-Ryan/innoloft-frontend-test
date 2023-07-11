import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ITRL } from '../interfaces/TRL';

export const TRLApi = createApi({
	reducerPath: "TRLApi",
	tagTypes: ["TRL"],
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.BASE_URL,
	
	}),
	endpoints: (build) => ({
		getTRLs: build.query<ITRL[], void>({
			query: () => ({
				url: "/trl/",
				method: "GET",
			}),
		}),
	}),
});

export const { useGetTRLsQuery } = TRLApi;
