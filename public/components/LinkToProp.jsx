import Link from 'next/link'
import { useRef } from 'react'

const LinkToProp = ({ visible, propName, displayName }) => {
    const anchor = useRef(null);
    const container = useRef(null);

    return <>
            <div ref={ container } className={ `ref-container${ visible ? " active" : "" }` } onClick={ () => { anchor?.current?.click() } }>
                <Link href={ propName }>
                    <a ref={ anchor }>{ displayName }</a>
                </Link>
            </div>
    </>
}

export default LinkToProp