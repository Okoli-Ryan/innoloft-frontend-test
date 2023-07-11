
import { IProduct } from '../../../../interfaces/Product';
import { useAppSelector } from '../../../../store/Store';
import EditBusinessModels from './components/EditBusinessModels';
import EditCategories from './components/EditCategories';
import EditCosts from './components/EditCosts';
import EditTRL from './components/EditTRL';

export default function EditOfferDetailsCard(props: IProduct) {

    const config = useAppSelector(state => state.configuration)

	return (
		<div className="col-span-3 flex flex-col p-4 gap-4 border-2">
			<h4 className="text-lg font-semibold" style={{color: config?.mainColor}}>Offer details</h4>
			<div className="grid grid-cols-6 gap-4">
				<EditCategories categories={props.categories} />
				<EditBusinessModels businessModels={props.businessModels} />
				<EditTRL trl={props.trl}/>
				<EditCosts cost={props.investmentEffort}/>
			</div>
		</div>
	);
}
