import { useState, useEffect } from 'react';
import Heading from '../../components/Heading';
import BackButton from '../../components/BackButton';
import MinusButton from '../../components/MinusButton'

class Player {
    constructor(_name="", number, points=0, setWins=0) {
        this.name = _name;
        this.number = number;
        this.points = points;
        this.setWins = setWins;
    }
}

const Triball = () => {
    // state
    const [player1, setPlayer1] = useState(new Player("Róbert", "first"));
    const [player2, setPlayer2] = useState(new Player("István", "second"));
    const [styles, setStyles] = useState({ reset: "", nameContainer: "" });
    
    // non-stateful state
    const [maxPoints, setMaxPoints] = useState(15);
    const [maxWins, setMaxWins] = useState(3);


    const changePlayerName = setPlayer => {
        const newName = prompt("Új név?");
        if(!newName) return null
        setPlayer(prev => { return { ...prev, name: newName } })
    }

    const handlePlusClick = player => {
        let { points, setWins } = { ...player }
        const setPlayer = player.number === "first" ? setPlayer1 : setPlayer2
        points++
        setPlayer(prev => { return { ...prev, points: prev.points + 1 } })

        if(points === maxPoints) {
            points = 0
            setWins++
            
            [setPlayer1, setPlayer2].forEach(i => i(prev => { return { ...prev, points: 0 } }));
            setPlayer(prev => { return { ...prev, setWins: setWins == maxWins ? 0: setWins } })
            if(setWins == maxWins) {
                setPlayer1(prev => { return { ...prev, points: 0, setWins: 0 } });
                setPlayer2(prev => { return { ...prev, points: 0, setWins: 0 } });
            }
        }
    }

    const resetOut = async() => {
        setStyles(prev => { return { ...prev, reset: "active out" } })
        setTimeout(() => { setStyles(prev => { return { ...prev, reset: "" } }) }, 300)
    }

    const cancelReset = () => {
        setStyles(prev => { return { ...prev, reset: "" } });
        resetOut();
    }

    const confirmReset = () => {
        cancelReset();
        [setPlayer1, setPlayer2].forEach(i => i(prev => { return { ...prev, points: 0, setWins: 0 } }));
    }

    const handleResetButton = () => {
        if(!styles.reset) setStyles(prev => { return { ...prev, reset: "active" } });
        else if(styles.reset == "active") resetOut()
    }

    useEffect(() => {
        document.title = "GameCounter - TriBall";
        (async function() {
            setTimeout(() => { setStyles({ nameContainer: "active" }) }, 1000)
        }())
    }, [])

    return <>
                <Heading>
                    <BackButton />
                    <div onClick={ handleResetButton } className={ "reset-button-container" }>
                        <div>!</div>
                    </div>
                </Heading>
                <div className={ "content-wrapper" }>

                    <div className={ "tri-field-container" }>

                    <div onClick={ e => changePlayerName(setPlayer1) } className={ `name-container first ${ styles.nameContainer }` }>
                        <span>{ player1.name }</span>
                    </div>
                    
                    <div onClick={ e => changePlayerName(setPlayer2) } className={ `name-container second ${ styles.nameContainer }` }>
                        <span>{ player2.name }</span>
                    </div>

                        <div className={ `player-set-container ${ styles.nameContainer }` }>
                            <div className={ "player-set first" }>{ player1.setWins }</div>
                            <div className={ "player-set second" }>{ player2.setWins }</div>
                        </div>

                        <MinusButton player={player1} setPlayer={setPlayer1} maxPoints={maxPoints}/>
                        <MinusButton player={player2} setPlayer={setPlayer2} maxPoints={maxPoints}/>

                        <div onClick={ e => { handlePlusClick(player1) } } className={ "tri-field-big" }></div>
                        <div onClick={ e => { handlePlusClick(player2) } } className={ "tri-field-big" }></div>

                        <div className={ "tri-field-middle" }>
                            <div className={ "player-point-container first" }><span>{ player1.points }</span></div>
                            <div className={ "player-point-container second" }><span>{ player2.points }</span></div>
                        </div>
                    </div>
                </div>
                <div className={ `popup-container ${ styles.reset }` }>
                    <div className={ `popup ${ styles.reset }` }>
                        <div className="popup-text-container">
                            <div className="popup-text">Reset?</div>
                        </div>
                        <div className="popup-cancel-container">
                            <div onClick={ cancelReset } className="popup-cancel"></div>
                        </div>
                        <div className="popup-confirm-container">
                            <div onClick={ confirmReset } className="popup-confirm"></div>
                        </div>
                    </div>
                </div>
    </>
}
export default Triball