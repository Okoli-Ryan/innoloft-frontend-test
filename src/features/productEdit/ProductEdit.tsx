import { Breadcrumb, Button, Form } from 'antd';
import { Navigate } from 'react-router-dom';

import UserCard from '../product/components/UserCard';
import EditDescriptionCard from './components/EditDescriptionCard';
import EditOfferDetailsCard from './components/EditOfferDetailsCard/EditOfferDetailsCard';
import EditVideoCard from './components/EditVideoCard';
import { ProductEditProvider } from './context';
import useProductEdit from './useProductEdit';

export default function ProductEdit() {
	const { productData, goBack, config, form, onFinish, isUpdating, ...props } = useProductEdit();

    if(!productData) return <Navigate to="/product" />

	return (
		// eslint-disable-next-line @typescript-eslint/no-misused-promises
		<Form form={form} onFinish={onFinish}>
			<div className="w-full">
				<div className="flex justify-between p-4 items-center">
					<div className="">
						<Breadcrumb separator=">" items={BreadcrumbItems} />
					</div>
					<Button className="" onClick={goBack}>
						View Product
					</Button>
				</div>
				<div className="grid grid-cols-3 gap-8">
					<EditDescriptionCard {...productData} />
					{config?.hasUserSection && <UserCard {...productData} />}
					<EditVideoCard {...productData} />
					<ProductEditProvider {...props}>
						<EditOfferDetailsCard {...productData} />
					</ProductEditProvider>
				</div>
			</div>
			<div className="flex justify-end mt-4">
				<Button htmlType="submit" loading={isUpdating}>Submit</Button>
			</div>
		</Form>
	);
}

const BreadcrumbItems = [
	{
		title: "Home",
	},
	{
		title: "Product",
	},
	{
		title: "Edit",
	},
];
