import { Component, createRef } from 'react'
import Link from 'next/link'

class BackButton extends Component {
    constructor(props) {
        super()
        // state
        this.state = {
            handleContainerClick: null
        }

        this.props = props;
        // refs
        this.container = createRef();
        this.backToHome = createRef();
        // methods

    }
    componentDidMount() {
        (async function() {
            setTimeout(() => { this.container.current.classList.add("active") }, 200);
        }());
        this.setState({ handleContainerClick: () => { this.backToHome.current.click() } });
    }

    render() {
        return(
            <>
                <div ref={ this.container } className={ "back-button-container" } onClick={ this.state.handleContainerClick }>
                    <div className={ "back-button" }>
                        <Link href={ "/" }>
                            <a ref={ this.backToHome } className={ "hidden" }></a>
                        </Link>
                    </div>
                </div>
            </>
        );
    };
};

export default BackButton