import { Breadcrumb, Button } from 'antd';

import ErrorContainer from '../../components/ErrorContainer';
import LoadingContainer from '../../components/LoadingContainer';
import DescriptionCard from './components/DescriptionCard';
import OfferDetailsCard from './components/OfferDetailsCard';
import UserCard from './components/UserCard';
import VideoCard from './components/VideoCard';
import useProductView from './useProductView';

export default function ProductView() {
	const { navigateToEdit, isLoading, isError, data, config } = useProductView();

	if (isLoading) return <LoadingContainer />;

	if (isError) return <ErrorContainer />;

	return (
		<div className="w-full">
			<div className="flex justify-between p-4 items-center">
				<div className="">
					<Breadcrumb separator=">" items={BreadcrumbItems} />
				</div>
				<Button className="" onClick={navigateToEdit}>
					Edit
				</Button>
			</div>
			<div className="grid grid-cols-3 gap-8">
				<DescriptionCard {...data!} />
				{config?.hasUserSection && <UserCard {...data!} />}
				<VideoCard {...data!} />
				<OfferDetailsCard {...data!} />
			</div>
		</div>
	);
}

const BreadcrumbItems = [
	{
		title: "Home",
	},
	{
		title: "Product",
	},
];
