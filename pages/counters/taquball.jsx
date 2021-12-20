import { Component } from 'react'
import Heading from '../../components/Heading'
import BackButton from '../../components/BackButton'
import ResetButton from '../../components/ResetButton'

export default class Taquball extends Component {
    constructor() {
        super();
        // this.state = {  };
    }

    componentDidMount() {
        document.title = "GameCounter - Teqqball";
    }

    render() {
        return(
            <>
                <Heading>
                    <BackButton />
                    <ResetButton />
                </Heading>
                <div className={ "content-wrapper" }>

                    <div className={ "tri-field-container" }>

                        <div className={ "tri-field-big first" }></div>
                        <div className={ "tri-field-big" }></div>

                        <div className={ "tri-field-middle" }>

                        </div>

                    </div>
                </div>
            </>
        )
    }
}