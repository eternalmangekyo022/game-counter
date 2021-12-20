import { Component } from 'react'

class Heading extends Component {
    constructor({ children }) {
        super()
        this.state = {  }
        this.children = children
    }

    render() {
        return(
            <>
                <div className="dropdown">{ this.children }</div>
            </>
        )
    }
}

export default Heading