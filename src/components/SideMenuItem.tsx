import { MenuProps } from 'antd';
import { NavLink } from 'react-router-dom';

export type SideMenuItem = Required<MenuProps>["items"][number];

export function getItem(label: React.ReactNode, key: string, icon?: React.ReactNode, children?: SideMenuItem[]): SideMenuItem {
	return {
		key,
		icon,
		children,
		label: (
			<NavLink to={`/${key}`} >
				{label}
			</NavLink>
		),
	} as SideMenuItem;
}
