import Dropdown from '../components/Dropdown'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    document.title = "GameCounter"
  }, [])

  return <Dropdown />
}

export default Home