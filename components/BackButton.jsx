import { Component, createRef } from 'react'
import Link from 'next/link'

class BackButton extends Component {
    constructor(props) {
        super()
        this.props = props;
        // refs
        this.container = createRef();
        this.backToHome = createRef();

        // methods
        this.handleButtonOnclick = this.handleButtonOnclick.bind(this);
    }

    componentDidMount() {
        setTimeout(() => { this.container.current.classList.add("active") }, 100)
    }

    handleButtonOnclick() {
        this.backToHome.current.click();
    }

    render() {
        return(
            <>
                <div ref={ this.container } className={ "back-button-container" } onClick={ this.handleButtonOnclick }>
                    <div className={ "back-button" }>
                        <Link href={ "/" }>
                            <a ref={ this.backToHome } className={ "hidden" }></a>
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}

export default BackButton