import { useState, useEffect } from 'react'

const MinusButton = ({ player, setPlayer, maxPoints }) => {
    // state = player
    // setState = setPlayer

    const [className, setClassName] = useState("start");

    const handleClick = () => {
        let { points, setWins } = { ...player }
        if(points) points--
        else if(setWins) {
            setWins--
            points = maxPoints - 1
        }
        setPlayer(prev => { return { ...prev, points, setWins } })
    }

    useEffect(() => {
        setTimeout(() => { setClassName("") }, 1000)
    }, [])

    return <>
        <div onClick={ handleClick } className={ `minus-button ${player.number} ${className}` }></div>
    </>
}

export default MinusButton