import { ConfigProvider } from 'antd';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Routes } from './core/Routes';
import { useAppSelector } from './store/Store';

export default function App() {
	const config = useAppSelector((state) => state.configuration);

	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: config?.mainColor || "#4096ff",
				},
			}}>
			<RouterProvider router={createBrowserRouter(Routes)} />
		</ConfigProvider>
	);
}
