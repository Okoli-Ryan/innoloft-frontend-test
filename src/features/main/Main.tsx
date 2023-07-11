import { useAppSelector } from '../../store/Store';

export default function Main() {

    const config = useAppSelector(state => state.configuration)


  return (
    <div className="h-full w-full flex justify-center items-center">

    <img src={config?.logo} className="w-48 h-full object-contain"/>
    </div>
  )
}
