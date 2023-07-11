import { useNavigate } from 'react-router-dom';

import { useGetProductQuery } from '../../api/Product.api';
import { useAppSelector } from '../../store/Store';

export default function useProductView() {
	const navigate = useNavigate();
	const { data, isLoading, isError } = useGetProductQuery();
    const config = useAppSelector(state => state.configuration)


	function navigateToEdit() {
		navigate("/product/edit", { state: data });
	}

	return { navigateToEdit, data, isLoading, isError, config };
}
