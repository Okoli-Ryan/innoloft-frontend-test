import { RouteObject } from 'react-router-dom';

import Main from '../features/main';
import ProductView from '../features/product';
import ProductEdit from '../features/productEdit';
import MainLayout from '../layouts/mainLayout';

export const Routes: RouteObject[] = [
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Main />,
			},
			{
				path: "/product",
				element: <ProductView />,
			},
			{
				path: "/product/edit",
				element: <ProductEdit />,
			},
		],
	},
];
