import { message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useLocation, useNavigate } from 'react-router-dom';

import { useLazyUpdateProductQuery } from '../../api/Product.api';
import { useGetTRLsQuery } from '../../api/TRL.api';
import { IProduct } from '../../interfaces/Product';
import { useAppSelector } from '../../store/Store';

export default function useProductEdit() {
	const { isLoading, data, isError } = useGetTRLsQuery();
    const [updateProduct, { isLoading: isUpdating }] = useLazyUpdateProductQuery()
    const config = useAppSelector(state => state.configuration)
    const [form] = useForm<Partial<IProduct>>()

	const navigate = useNavigate();
	const location = useLocation();

	const productData = location.state as IProduct;

    async function onFinish() {
        try {
            
            const payload = form.getFieldsValue()
            await updateProduct(payload).unwrap()
            void message.success('Product updated successfully')
        } catch (error) {
            void message.error("Unable to update product")
        }
    }
	function goBack() {
		navigate(-1, { state: productData });
	}

	return { isLoading, data, isError, productData, goBack, config, form, onFinish, isUpdating };
}
