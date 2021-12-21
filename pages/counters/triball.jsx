import { Component, createRef } from 'react'
import Heading from '../../components/Heading'
import BackButton from '../../components/BackButton'
import NameContainer from '../../components/NameContainer'


class Player {
    constructor(_name="", points=0, setWins=0) {
        this.name = _name;
        this.points = points;
        this.setWins = setWins;
    }
}

export default class Taquball extends Component {
    constructor() {
        super();
        
        this.state = {
            player1: new Player("Róbert"),
            player2: new Player("István"),
            reset: "",
            nameContainer: "",
            classStart: "start",
        };

        this.handleResetButton = this.handleResetButton.bind(this);
        this.cancelReset = this.cancelReset.bind(this);
        this.confirmReset = this.confirmReset.bind(this);
        this.resetOut = this.resetOut.bind(this);
        this.handlePlayerPlus = this.handlePlayerPlus.bind(this);
        this.handleMinusClick = this.handleMinusClick.bind(this);
    }
    
    handlePlayerPlus(player) {
        if(this.state[player].points == 14) {
            if(this.state[player].setWins == 2) {
                alert(`Set won by ${ this.state[player].name }!`);
                this.setState({ player1: { points: 0, setWins: 0 }, player2: { points: 0, setWins: 0 } })
            } else {
                this.setState({ [player]: { points: 0, setWins: this.state[player].setWins + 1 } })
            }
        } else {
            this.setState({ [player]: { points: this.state[player].points + 1, setWins: this.state[player].setWins } });
        }
    }
    
    handleMinusClick(player) {
        const { points } = this.state[player];

        if(points) this.setState({ [player]: { points: points - 1, setWins: this.state[player].setWins } })
        
    }

    cancelReset() {
        this.setState({ reset: "" });
        this.resetOut();
    }

    confirmReset() {
        this.cancelReset();
        this.setState({ player1: { points: 0, setWins: 0 }, player2: { points: 0, setWins: 0 } })
    }

    async resetOut() {
        this.setState({ reset: "active out" })
        setTimeout(() => { this.setState({ reset: "" }) }, 300)
    }

    handleResetButton() {
        let { reset } = this.state

        if(!reset) {
            this.setState({ reset: "active" });
        } else if(reset == "active") {
            this.resetOut();
        }
    }

    componentDidMount() {
        document.title = "GameCounter - TriBall";
        (async function() {
            setTimeout(() => this.setState({ classStart: "" }), 1000)
        }());
    }

    render() {
        return <>
                <Heading>
                    <BackButton />
                    <div onClick={ this.handleResetButton } className={ "reset-button-container" }>
                        <div>!</div>
                    </div>
                </Heading>
                <div className={ "content-wrapper" }>

                    <div className={ "tri-field-container" }>
                        <div className={ "player-set-container" }>
                            <div className={ "player-set first" }>{ this.state.player1.setWins }</div>
                            <div className={ "player-set second" }>{ this.state.player2.setWins }</div>
                        </div>

                        <div onClick={ e => this.handleMinusClick("player1") } className={ `minus-button first ${ this.state.classStart }` }></div>
                        <div onClick={ e => this.handleMinusClick("player2") } className={ `minus-button second ${ this.state.classStart }` }></div>


                        <div onClick={ e => { this.handlePlayerPlus("player1") } } className={ "tri-field-big" }>
                            <NameContainer player={ this.state.player1 } classNum={ "first" } ></NameContainer>
                        </div>
                        <div onClick={ e => { this.handlePlayerPlus("player2") } } className={ "tri-field-big" }>
                            <NameContainer player={ this.state.player2 } classNum={ "second" } ></NameContainer>
                        </div>

                        <div className={ "tri-field-middle" }>
                            <div className={ "player-point-container first" }><span>{ this.state.player1.points }</span></div>
                            <div className={ "player-point-container second" }><span>{ this.state.player2.points }</span></div>
                        </div>
                    </div>
                </div>
                <div className={ `popup-container ${ this.state.reset }` }>
                    <div className={ `popup ${ this.state.reset }` }>
                        <div className="popup-text-container">
                            <div className="popup-text">Reset?</div>
                        </div>
                        <div className="popup-cancel-container">
                            <div onClick={ this.cancelReset } className="popup-cancel"></div>
                        </div>
                        <div className="popup-confirm-container">
                            <div onClick={ this.confirmReset } className="popup-confirm"></div>
                        </div>
                    </div>
                </div>
            </>
    }
}