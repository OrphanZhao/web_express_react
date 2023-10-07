import { Button } from 'antd'
import { useCountModel } from '@/model/count'

const CountB = () => {
  const { inc } = useCountModel()
  return <Button onClick={inc}>CountB</Button>
}

export default CountB
