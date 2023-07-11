import { Form, InputNumber } from 'antd';
import { TbMoneybag } from 'react-icons/tb';

import OfferDetailsItem from '../../../../../components/OfferDetailsItem';

export default function EditCosts({cost} : {cost: string}) {
  return (
    <OfferDetailsItem title="Costs" icon={<TbMoneybag className="text-lg"/>}>
        <Form.Item
				name="investmentEffort"
				>
				<InputNumber defaultValue={cost} name="investmentEffort" placeholder="Estimated Costs" className='w-48'/>
			</Form.Item>
    </OfferDetailsItem>
  )
}
