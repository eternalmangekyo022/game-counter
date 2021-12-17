import Link from 'next/link'
import { createRef, Component } from 'react'

class LinkToProp extends Component {
    constructor(props) {
        super()
        this.props = props
        
        // refs
        this.anchor = createRef();
        this.refContainer = createRef();

        // methods
        this.handleContainerOnclick = this.handleContainerOnclick.bind(this)
    }

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