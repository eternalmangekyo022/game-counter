import { createRef, Component } from 'react'
import LinkToProp from './LinkToProp'

class Dropdown extends Component {
    constructor(props) {
        super();
        this.state = {
            isVisible: false 
        }
        this.dropdown = createRef();
        this.toggleButton = createRef();
        this.linkContainer = createRef();
        this.handleDropdownToggle = this.handleDropdownToggle.bind(this);
    }
    
    handleDropdownToggle = () => {
        this.dropdown.current.classList.toggle("active");
        this.toggleButton.current.classList.toggle("active");
        this.linkContainer.current.classList.toggle("active");
        this.setState({ isVisible: !this.state.isVisible });
    }
    
    render() {
        return(
            <>
                <div className="dropdown" ref={ this.dropdown }>
                    <div className="dropdown-container">
                        <div className="dropdown-toggle-container" onClick={ this.handleDropdownToggle } ref={ this.toggleButton }>
                            <div></div>
                        </div>
                    </div>
                    <div className={ "link-container" } ref={ this.linkContainer }>
                        <LinkToProp propName={ "./counters/taquball" } displayName={ "Taquball" } isVisible={ this.state.isVisible }/>
                        <LinkToProp propName={ "./counters/ballbouncer" } displayName={ "Ball Bouncer" } isVisible={ this.state.isVisible }/>
                    </div>
                </div>
            </>
        )
    }
    
}

export default Dropdown