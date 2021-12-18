// import Link from 'next/link'
import { Component } from 'react'
import Heading from '../../components/Heading'
import BackButton from '../../components/BackButton'



export default class Teqqball extends Component {
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
                <p>Teqqball</p>
            </>
        )
    }
}