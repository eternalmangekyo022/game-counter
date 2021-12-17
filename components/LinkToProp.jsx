import Link from 'next/link'
import { createRef, Component } from 'react'

class LinkToProp extends Component {
    constructor(props) {
        super()
        this.props = props
        this.state = {  }
        this.anchor = createRef();
        this.refContainer = createRef();
        this.handleContainerOnclick = this.handleContainerOnclick.bind(this)
    }

    // componentDidMount() {
    //     this.refContainer.current.onClick = () => {
    //         this.anchor.current.click();
    //     }
    // }

    handleContainerOnclick() {
        this.anchor.current.click();
    }

    render() {
        return(
            <>
                <div ref={ this.refContainer } className={ `ref-container${ this.props.isVisible ? " active" : "" }` } onClick={ this.handleContainerOnclick }>
                    <Link href={ this.props.propName }>
                        <a ref={ this.anchor }>{ this.props.displayName }</a>
                    </Link>
                </div>
            </>
        )
    }
}
export default LinkToProp