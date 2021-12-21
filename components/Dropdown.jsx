import { Component } from 'react'
import LinkToProp from './LinkToProp'

class Dropdown extends Component {
    constructor({  }) {
        super();
        this.state = {
            isVisible: false ,
            dropdownState: ""
        }

        this.handleDropdownToggle = this.handleDropdownToggle.bind(this);
    }
    
    handleDropdownToggle = () => {
        let state = this.state.dropdownState;
        this.setState({
            isVisible: !this.state.isVisible,
            dropdownState: state ? "" : "active"
        });
    }
    
    render() {
        return(
            <>
                <div className={ `dropdown ${ this.state.dropdownState }` }>
                    <div className="dropdown-container">
                        <div className={ `dropdown-toggle-container ${ this.state.dropdownState }` } onClick={ this.handleDropdownToggle }>
                            <div></div>
                        </div>
                    </div>
                    <div className={ `link-container ${ this.state.dropdownState }` }>
                        <LinkToProp propName={ "./counters/triball" } displayName={ "Triball" } isVisible={ this.state.isVisible }/>
                        <LinkToProp propName={ "./counters/ballbouncer" } displayName={ "Ball Bouncer" } isVisible={ this.state.isVisible }/>
                    </div>
                </div>
            </>
        )
    }
}

export default Dropdown