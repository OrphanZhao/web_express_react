import { Button } from 'antd'
import { useCountModel } from '@/model/count'

const CountA = () => {
  const { inc } = useCountModel()
  return <Button onClick={inc}>CountA</Button>
}

export default CountA
