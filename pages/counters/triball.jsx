import { useState, useEffect } from 'react';
import Heading from '/public/components/Heading';
import BackButton from '/public/components/BackButton';
import SwapFields from '/public/components/SwapFields';

const useObject = (defaultState = null) => {
    const [state, setState] = useState(defaultState);

    const spreadState = (newState = null) => {
        if(!newState) return
        setState(prev => { return { ...prev, ...newState } })
    }

    return [state, setState, spreadState];
}

class Player {
    constructor(_name="", number, points=0, setWins=0) {
        this.name = _name;
        this.number = number;
        this.points = points;
        this.setWins = setWins;
        this.lastWinPoints = 0;
    }
}

const Triball = () => {
    // state

    const [player1, setPlayer1, spreadPlayer1] = useObject(new Player("player1", "first"));
    const [player2, setPlayer2, spreadPlayer2] = useObject(new Player("player2", "second"));
    const [styles, setStyles, spreadStyles] = useObject({ reset: "", nameContainer: "", start: "start" });

    // non-stateful state
    const [maxPoints, setMaxPoints] = useState(15);
    const [maxWins, setMaxWins] = useState(3);


    const changePlayerName = spreadPlayer => {
        const newName = prompt("New name?");
        if(!newName) return null
        spreadPlayer({ name: newName })
    }

    const handlePlusClick = number => {
        const resetPlayers = (completely=false) => {
            [setPlayer1, setPlayer2].forEach(i => { i(prev => { return { ...prev, points: 0, setWins: completely ? 0 : prev.setWins } }) });
        }

        const player = number === "first" ? player1 : player2
        const spreadPlayer = number === "first" ? spreadPlayer1 : spreadPlayer2
        const oppositePlayer = number === "first" ? player2 : player1
        const spreadOppositePlayer = number === "first" ? spreadPlayer2 : spreadPlayer1
        
        spreadPlayer({ points: player.points + 1 });
        if(player.points + 1 === maxPoints) {
            spreadOppositePlayer({ lastWinPoints: oppositePlayer.points });
            spreadPlayer({ setWins: player.setWins + 1 });
            
            resetPlayers();
            if(player.setWins + 1 === maxWins) {
                alert(`${ player.name } won the game!`);
                resetPlayers(true);
            }
        }
    }

    const handleMinusClick = number => {
        const player = number === "first" ? { ...player1 } : { ...player2 };
        const spreadPlayer = number === "first" ? spreadPlayer1 : spreadPlayer2;
        const oppositePlayer = number === "first" ? player2 : player1;
        const spreadOppositePlayer = number === "first" ? spreadPlayer2 : spreadPlayer1;

        if(player.points) spreadPlayer({ points: player.points - 1 });
        else if(player.setWins) {
            spreadPlayer({ setWins: player.setWins - 1, points: maxPoints - 1 });
            spreadOppositePlayer({ points: oppositePlayer.lastWinPoints });
        }
    }

    const resetOut = async() => {
        spreadStyles({ reset: "active out" })
        setTimeout(() => spreadStyles({ reset: "" }), 300)
    }

    const cancelReset = () => {
        spreadStyles({ reset: "" })
        resetOut();
    }

    const confirmReset = () => {
        cancelReset();
        [spreadPlayer1, spreadPlayer2].forEach(i => i({ points: 0, setWins: 0 }));
    }

    const handleResetButton = () => {
        if(!styles.reset) spreadStyles({ reset: "active" })
        else if(styles.reset == "active") resetOut()
    }

    useEffect(() => {
        document.title = "GameCounter - TriBall";
        (async function() {
            setTimeout(() => { spreadStyles({ nameContainer: "active", start: "" }) }, 1000)
        }())
    }, [])

    return <>
                <Heading>
                    <BackButton />
                    <SwapFields
                        player1={player1}
                        player2={player2}
                        spreadPlayer1={spreadPlayer1}
                        spreadPlayer2={spreadPlayer2}
                    />
                    <div onClick={ handleResetButton } className={ "reset-button-container" }>
                        <div>!</div>
                    </div>
                </Heading>
                <div className={ "content-wrapper" }>

                    <div className={ "tri-field-container" }>

                    <div onClick={ e => changePlayerName(spreadPlayer1) } className={ `name-container first ${ styles.nameContainer }` }>
                        <span>{ player1.name }</span>
                    </div>
                    
                    <div onClick={ e => changePlayerName(spreadPlayer2) } className={ `name-container second ${ styles.nameContainer }` }>
                        <span>{ player2.name }</span>
                    </div>

                        <div className={ `player-set-container ${ styles.nameContainer }` }>
                            <div className={ "player-set first" }>{ player1.setWins }</div>
                            <div className={ "player-set second" }>{ player2.setWins }</div>
                        </div>

                        <div onClick={ e => handleMinusClick("first") } className={ `minus-button first ${styles.start}` }></div>
                        <div onClick={ e => handleMinusClick("second") } className={ `minus-button second ${styles.start}` }></div>

                        <div onClick={ e => { handlePlusClick("first") } } className={ "tri-field-big" }></div>
                        <div onClick={ e => { handlePlusClick("second") } } className={ "tri-field-big" }></div>

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
