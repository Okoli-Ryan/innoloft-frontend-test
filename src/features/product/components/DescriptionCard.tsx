import { useAppSelector } from '../../../store/Store';

export default function DescriptionCard({ name, description, picture }: IDescriptionCard) {

    const config = useAppSelector(state => state.configuration)


	return (
		<div className={`${config?.hasUserSection ? "col-span-3 lg:col-span-2" : "col-span-3"} border-2 rounded-lg`}>
			<div className="flex flex-col">
				<img src={picture} alt="product image" className="object-cover w-full h-80" />
				<div className="flex flex-col gap-2 p-4">
					<h4 className="text-lg font-semibold" style={{color: config?.mainColor}}>{name}</h4>
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
}

interface IDescriptionCard {
	name: string;
	description: string;
	picture: string;
}
