import { ReactNode } from 'react';

import { IProductEditContext, ProductEditContext } from './ProductEdit.context';

export const ProductEditProvider = ({ children, data, isLoading, isError }: IProductEditContext & { children: ReactNode }) => {
	return <ProductEditContext.Provider value={{ data, isLoading, isError }}>{children}</ProductEditContext.Provider>;
};
