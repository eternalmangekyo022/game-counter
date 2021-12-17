import Dropdown from '../components/Dropdown'
import { Component } from 'react'

class Home extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    document.title = "GameCounter";
  }

  render() {
    return(
      <>
        <Dropdown>

        </Dropdown>
      </>
    )
  }
}

export default Home