import Dropdown from '/public/components/Dropdown'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    document.title = "GameCounter"
  }, [])

  return <Dropdown />
}

export default Home