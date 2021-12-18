import { Component } from 'react'
import Heading from '../../components/Heading'
import BackButton from '../../components/BackButton'



export default class Taquball extends Component {
    constructor() {
        super();
        this.state = {  };
    }

    componentDidMount() {
        document.title = "GameCounter - Teqqball";
    }

    render() {
        return(
            <>
                <Heading>
                    <BackButton />
                </Heading>
                <div className={ "content-wrapper" }>
                    <div className={ "taqu-field-container" }>
                        <div className="taqu-field-big"></div>
                        <div className="taqu-field-middle">
                            <div className="taqu-field-line"></div>
                            <div className="taqu-field-box"></div>
                            <div className="taqu-field-line"></div>
                        </div>
                        <div className="taqu-field-big"></div>
                    </div>
                </div>
            </>
        )
    }
}