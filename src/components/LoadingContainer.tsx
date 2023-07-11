import { Spin } from 'antd';

export default function LoadingContainer() {
  return (
    <div className="h-full w-full flex items-center justify-center">
        <Spin />
    </div>
  )
}
