import Link from 'next/link'
import { createRef, Component } from 'react'

export default class extends Component {
    constructor(props) {
        super()
        this.props = props
        this.state = {  }
        this.anchor = createRef();
        this.refContainer = createRef();
        this.handleContainerOnclick = this.handleContainerOnclick.bind(this)
    }

    handleContainerOnclick() {
        try {
            this.anchor.current.click();
        } catch(err) {
            console.error("Component hasn't rendered yet, or something else happened. Go check it out.")
        }
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