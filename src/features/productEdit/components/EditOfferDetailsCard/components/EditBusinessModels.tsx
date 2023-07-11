import { FaRegChessKnight } from 'react-icons/fa6';

import OfferDetailsItem from '../../../../../components/OfferDetailsItem';
import TagsInput from '../../../../../components/TagsInput';

export default function EditBusinessModels({businessModels}: {businessModels: {id: number, name: string}[]}) {
	const initialValues = businessModels.map((model) => model.name);

	return (
		<OfferDetailsItem icon={<FaRegChessKnight className="text-lg" />} title="Business Models">
			<TagsInput initialValue={initialValues} />
		</OfferDetailsItem>
	);
}
