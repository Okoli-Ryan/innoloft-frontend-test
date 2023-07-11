import { createContext, useContext } from 'react';

import { ITRL } from '../../../interfaces/TRL';

export interface IProductEditContext {
    data?: ITRL[],
    isLoading? : boolean;
    isError: boolean
}

export const ProductEditContext = createContext({} as IProductEditContext)

export const useProductEditContext = () => useContext(ProductEditContext)