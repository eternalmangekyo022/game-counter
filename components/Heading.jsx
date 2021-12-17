import { Component } from 'react'

class Heading extends Component {
    constructor(props) {
        super()
        this.state = {  }
        this.props = props
    }

    render() {
        return(
            <>
                <div className="dropdown">{ this.props.children }</div>
            </>
        )
    }
}

export default Heading