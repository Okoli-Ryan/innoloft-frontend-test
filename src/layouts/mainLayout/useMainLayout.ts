
import { useLocation } from 'react-router-dom';

import { useGetConfigurationQuery } from '../../api/Configuration.api';
import Env from '../../core/Env';

export default function useMainLayout() {

    const { isLoading, isError, data } = useGetConfigurationQuery(Env.APP_ID)

    const { pathname } = useLocation()

  return { isLoading, isError, data, selectedKey: getNavSelectedKey(pathname) }
}

const getNavSelectedKey = (pathName: string )=> pathName.length === 1 ? "" : pathName.substring(1)
