import { Select } from 'antd';
import { BsClock } from 'react-icons/bs';

import OfferDetailsItem from '../../../../../components/OfferDetailsItem';
import { useProductEditContext } from '../../../context';

export default function EditTRL({ trl }: { trl: { id: number; name: string } }) {
	const { data = [], isLoading } = useProductEditContext();
	const initialValues = data.map((item) => ({ value: item.id, label: item.name }));

	return (
		<OfferDetailsItem title="TRL" icon={<BsClock className="text-lg" />}>
			<Select loading={isLoading} defaultValue={trl.name} className="w-60" options={initialValues} />
		</OfferDetailsItem>
	);
}
