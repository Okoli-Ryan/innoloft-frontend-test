import { Form, Input } from 'antd';

import { IProduct } from '../../../interfaces/Product';
import { useAppSelector } from '../../../store/Store';

export default function EditVideoCard(props: IProduct) {

    const config = useAppSelector(state => state.configuration)

	return (
		<div className="col-span-3 flex flex-col justify-center gap-4 border-2 p-4">
			<h4 className="text-lg font-semibold" style={{color: config?.mainColor}}>Video</h4>
			<Form.Item
				name="video"
				rules={[
					{
						pattern:
							/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|live\/|v\/)?)([\w-]+)(\S+)?$/,
						message: "Not a valid youtube video url",
					},
				]}>
				<Input name="video" placeholder="video url" defaultValue={props.video}/>
			</Form.Item>
		</div>
	);
}
