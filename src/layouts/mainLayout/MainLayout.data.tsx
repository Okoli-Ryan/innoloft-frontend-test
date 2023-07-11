import { BiHomeAlt2, BiLogoProductHunt } from 'react-icons/bi';

import { getItem } from '../../components/SideMenuItem';

export const dashboardMenuItems = [
	getItem("Home", "", <BiHomeAlt2 />),
	getItem("Product", "product", <BiLogoProductHunt />),
];