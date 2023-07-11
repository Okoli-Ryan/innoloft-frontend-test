import { BsClock } from 'react-icons/bs';
import { CiSettings } from 'react-icons/ci';
import { FaRegChessKnight } from 'react-icons/fa6';
import { TbMoneybag } from 'react-icons/tb';

import { useAppSelector } from '../../../store/Store';

export default function OfferDetailsCard({ businessModels, categories, investmentEffort, trl }: IOfferDetailsCard) {

    const config = useAppSelector(state => state.configuration)

	return (
		<div className="col-span-3 flex flex-col p-4 gap-4 border-2">
			<h4 className="text-lg font-semibold"  style={{color: config?.mainColor}}>Offer details</h4>
			<div className="grid grid-cols-6 gap-4">
				<OfferDetail title="Technology" pills={categories} icon={<CiSettings className="text-lg" />} />
				<OfferDetail title="Business Model" pills={businessModels} icon={<FaRegChessKnight className="text-lg" />} />
				<OfferDetail title="TRL" pills={trl.name} icon={<BsClock className="text-lg" />} />
				<OfferDetail title="Costs" pills={investmentEffort} icon={<TbMoneybag className="text-lg" />} />
			</div>
		</div>
	);
}

function OfferDetail({ icon, title, pills }: IOfferDetail) {

    const config = useAppSelector(state => state.configuration)

	return (
		<div className="flex gap-2 col-span-6 md:col-span-3">
			<span>{icon}</span>
			<div className="flex flex-col gap-2">
				<p className='font-semibold' style={{color: config?.mainColor}}>{title}</p>
				<div className="flex gap-2 flex-wrap">
					{Array.isArray(pills) ? pills.map((pill) => <span className="pill">{pill.name}</span>) : <span className="pill">{pills}</span>}
				</div>
			</div>
		</div>
	);
}

interface IOfferDetail {
	icon: React.ReactNode;
	title: string;
	pills: Array<{ id: number; name: string }> | string;
}

interface IOfferDetailsCard {
	categories: Array<{ name: string; id: number }>;
	businessModels: Array<{ name: string; id: number }>;
	investmentEffort: string;
	trl: {
		name: string;
	};
}
