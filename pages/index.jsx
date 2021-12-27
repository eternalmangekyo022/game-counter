import Dropdown from '../components/Dropdown'
import { useEffect } from 'react'

export default () => {
  useEffect(() => {
    document.title = "GameCounter"
  }, [])

  return <Dropdown />
}