import React from 'react';

import { useAppSelector } from '../store/Store';

interface IOfferDetailsItem {
	icon: React.ReactNode;
	title: string;
	children: React.ReactNode;
}

export default function OfferDetailsItem({ icon, title, children }: IOfferDetailsItem) {

    const config = useAppSelector(state => state.configuration)

	return (
		<div className="flex gap-2 col-span-6 md:col-span-3">
			<span>{icon}</span>
			<div className="flex flex-col gap-2">
				<p style={{ color: config?.mainColor}}>{title}</p>
				{children}
			</div>
		</div>
	);
}
