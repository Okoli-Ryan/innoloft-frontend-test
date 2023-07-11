import GoogleMapReact from 'google-map-react';
import { CiLocationOn } from 'react-icons/ci';
import { FaLocationDot } from 'react-icons/fa6';

import { useAppSelector } from '../../../store/Store';

export default function UserCard({ company, user }: IUserCard) {
	const { address } = company;
	const center = { lat: +address.latitude, lng: +address.longitude };
	const config = useAppSelector((state) => state.configuration);

	return (
		<div className="col-span-3 lg:col-span-1 flex flex-col gap-4 p-4 border-2">
			<h3 className="text-lg" style={{ color: config?.mainColor }}>
				Offered By
			</h3>
			<img className="w-32 object-fit" alt="" src={company.logo} />
			<div className="flex gap-2">
				<img className="w-12 object-fit rounded-full " alt="" src={user.profilePicture} />
				<div className="flex flex-col gap-2">
					<p className="text-sm font-semibold" style={{ color: config?.mainColor }}>{`${user.firstName} ${user.lastName}`}</p>
					<p className="text-sm">{company.name}</p>
				</div>
			</div>
			<div className="flex gap-2 items-center">
				<CiLocationOn />
				<p className="text-sm">{`${address.house} ${address.street}, ${address.city.name}, ${address.country.name}`}</p>
			</div>
			<div className="w-full h-60">
				<GoogleMapReact
					yesIWantToUseGoogleMapApiInternals
					bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_KEY as string }}
					defaultCenter={center}
					defaultZoom={11}>
					<Marker lat={center.lat} lng={center.lng} />
				</GoogleMapReact>
			</div>
		</div>
	);
}

function Marker({ lng, lat }: { lat: number; lng: number }) {
	const config = useAppSelector((state) => state.configuration);

	return <FaLocationDot lat={lat} lng={lng} className="text-xl" style={{ color: config?.mainColor }} />;
}

interface IUserCard {
	company: {
		name: string;
		logo: string;
		address: {
			house: string;
			street: string;
			country: {
				name: string;
			};
			city: {
				name: string;
			};
			longitude: string;
			latitude: string;
		};
	};
	user: {
		firstName: string;
		lastName: string;
		profilePicture: string;
	};
}
