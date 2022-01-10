import { useState } from 'react'

export function useObject(defaultState = null) {
    const [state, setState] = useState(defaultState);

    const spreadState = (newState = null) => {
        if(!newState) return
        setState(prev => { return { ...prev, ...newState } })
    }

    return [state, setState, spreadState];
}