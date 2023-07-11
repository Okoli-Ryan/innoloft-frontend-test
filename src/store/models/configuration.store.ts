import { createSlice } from '@reduxjs/toolkit';

import { ConfigurationApi } from '../../api/Configuration.api';
import { IConfiguration } from '../../interfaces/Configuration';

const initialState = null as IConfiguration | null

export const ConfigurationSlice = createSlice({
	name: "configuration",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(ConfigurationApi.endpoints.getConfiguration.matchFulfilled, (_, { payload }) => {
			return payload;
		});
	},
});
