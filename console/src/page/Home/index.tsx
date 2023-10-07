import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div>
        <Button type="link" onClick={() => navigate('/login')}>
          <span className="!text-8xl">login</span>
        </Button>
      </div>
    </div>
  )
}

export default Home
