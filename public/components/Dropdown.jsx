import { useState } from 'react'
import LinkToProp from './LinkToProp'

const Dropdown = ({  }) => {
    const [visible, setVisible] = useState(false);
    const [dropdownClass, setDropdownClass] = useState("");

    const handleDropdownToggle = () => {
        setVisible(prev => !prev);
        setDropdownClass(prev => prev ? "" : "active");
    }

    return <>
            <div className={ `dropdown ${ dropdownClass }` }>
                <div className="dropdown-container">
                    <div className={ `dropdown-toggle-container ${ dropdownClass }` } onClick={ handleDropdownToggle }>
                        <div></div>
                    </div>
                </div>
                <div className={ `link-container ${ dropdownClass }` }>
                    <LinkToProp propName={ "./counters/triball" } displayName={ "Triball" } visible={ visible }/>
                    <LinkToProp propName={ "./counters/ballbouncer" } displayName={ "Ball Bouncer" } visible={ visible }/>
                </div>
            </div>
    </>
}

export default Dropdown