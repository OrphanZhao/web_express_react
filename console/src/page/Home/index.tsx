import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import CountA from './CountA'
import CountB from './CountB'
import { useCountModel } from '@/model/count'

const Home = () => {
  const navigate = useNavigate()
  const { count } = useCountModel()

  return (
    <div>
      <div className="!p-8">
        <Button type="link" onClick={() => navigate('/login')}>
          <span className="!text-8xl">login</span>
        </Button>
      </div>
      <div className="!text-lg">{count}</div>
      <div>
        <CountA />
        <CountB />
      </div>
    </div>
  )
}

export default Home
