import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';

import { ConfigurationApi } from '../api/Configuration.api';
import { ProductApi } from '../api/Product.api';
import { TRLApi } from '../api/TRL.api';
import { ConfigurationSlice } from './models';

export const store = configureStore({
	reducer: {
        [ConfigurationSlice.name]: ConfigurationSlice.reducer,
		[ConfigurationApi.reducerPath]: ConfigurationApi.reducer,
		[TRLApi.reducerPath]: TRLApi.reducer,
		[ProductApi.reducerPath]: ProductApi.reducer,
	},
	middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), TRLApi.middleware, ProductApi.middleware, ConfigurationApi.middleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
