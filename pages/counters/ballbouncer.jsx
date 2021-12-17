import { Component } from 'react'
import Heading from '../../components/Heading'
import BackButton from '../../components/BackButton'

export default class BallBouncer extends Component {
    constructor(props) {
        super();
        this.state = {  };
    }

    render() {
        return (
            <>
                <Heading>
                    <BackButton />
                </Heading>
                <p>Ball Bouncer</p>
            
            </>
        )
    }
}