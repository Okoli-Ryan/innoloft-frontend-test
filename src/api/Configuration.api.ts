import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IConfiguration } from '../interfaces/Configuration';

export const ConfigurationApi = createApi({
	reducerPath: "ConfigurationApi",
	tagTypes: ["Configuration"],
	baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL }),
	endpoints: (build) => ({
		getConfiguration: build.query<IConfiguration, number>({
			query: (appId) => ({
				url: `/configuration/${appId}`,
				method: "GET",
			}),
		}),
	}),
});

export const { useGetConfigurationQuery } = ConfigurationApi;
