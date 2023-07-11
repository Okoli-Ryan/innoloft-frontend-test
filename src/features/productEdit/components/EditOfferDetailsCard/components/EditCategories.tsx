import { CiSettings } from 'react-icons/ci';

import OfferDetailsItem from '../../../../../components/OfferDetailsItem';
import TagsInput from '../../../../../components/TagsInput';

export default function EditCategories({ categories }: { categories: { id: number; name: string }[] }) {
	const initialValues = categories.map((category) => category.name);

	return (
		<OfferDetailsItem icon={<CiSettings className="text-lg" />} title="Technology">
			<TagsInput initialValue={initialValues} />
		</OfferDetailsItem>
	);
}
