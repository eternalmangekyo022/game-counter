import { useEffect } from 'react'
import Heading from '/public/components/Heading'
import BackButton from '/public/components/BackButton'

const BallBouncer = ({  }) => {
    useEffect(() => {
        document.title = "GameCounter - Ball Bouncer"
    }, [])

    return <>
        <Heading>
            <BackButton />
        </Heading>
        <p>Ball Bouncer</p>
    </>
}

export default BallBouncer