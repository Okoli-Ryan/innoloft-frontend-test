import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';

import ErrorContainer from '../../components/ErrorContainer';
import LoadingContainer from '../../components/LoadingContainer';
import Header from './components/Header';
import { dashboardMenuItems } from './MainLayout.data';
import useMainLayout from './useMainLayout';

const { Sider, Content, Header: AntHeader } = Layout;

export default function MainLayout() {
	const { isLoading, isError, data, selectedKey } = useMainLayout();

	if (isLoading)
		return (
			<div className="w-screen h-screen">
				<LoadingContainer />
			</div>
		);

	if (isError) return <ErrorContainer />

	return (
		<Layout className="h-screen">
			<AntHeader className="flex items-center p-4" style={{ background: data?.mainColor }}>
				<Header />
			</AntHeader>
			<Layout>
				<Sider breakpoint="md" collapsedWidth="48" style={{ height: "100%", overflow: "auto" }}>
					<Menu theme="dark" mode="inline" items={dashboardMenuItems} defaultSelectedKeys={[selectedKey]}/>
				</Sider>
				<Content className="overflow-auto p-4">
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	);
}
