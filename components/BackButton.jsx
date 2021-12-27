import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'

const BackButton = ({  }) => {
    const [containerClassName, setContainerClassName] = useState("back-button-container");

    const back = useRef(null);
    const container = useRef(null);

    useEffect(() => {
        (async function() {
            setTimeout(() => setContainerClassName(prev => prev + " active"), 200);
        })();
    }, [])

    return <>
            <div ref={ container } className={ containerClassName } onClick={ () => { back?.current?.click() } }>
                <div className={ "back-button" }>
                    <Link href={ "/" }>
                        <a ref={ back } className={ "hidden" }></a>
                    </Link>
                </div>
            </div>
    </>
}

export default BackButton