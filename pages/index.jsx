import Dropdown from '../components/Dropdown'
import { useEffect } from 'react'

export default Home = () => {
  useEffect(() => {
    document.title = "GameCounter"
  }, [])

  return <Dropdown />
}