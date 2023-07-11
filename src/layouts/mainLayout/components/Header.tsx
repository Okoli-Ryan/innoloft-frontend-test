import { useAppSelector } from '../../../store/Store';

export default function Header() {
	const { logo } = useAppSelector((state) => state.configuration)!;

	return <img src={logo} className="h-12 object-fit" />;
}
    