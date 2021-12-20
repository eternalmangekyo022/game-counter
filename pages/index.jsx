import Dropdown from '../components/Dropdown'
import { Component } from 'react'

const uri = "mongodb+srv://eternalmangekyo022:Tibbermine2@cluster0.suear.mongodb.net/Cluster0?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

class Home extends Component {
  constructor() {
    super()

    this.state = { client: null }
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