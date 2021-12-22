import { Component } from 'react'
import Heading from '../../components/Heading'
import BackButton from '../../components/BackButton'

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
            maxPoints: 15,
            nameContainerClass: "",
        };

        this.handleResetButton = this.handleResetButton.bind(this);
        this.cancelReset = this.cancelReset.bind(this);
        this.confirmReset = this.confirmReset.bind(this);
        this.resetOut = this.resetOut.bind(this);
        this.handlePlusClick = this.handlePlusClick.bind(this);
        this.handleMinusClick = this.handleMinusClick.bind(this);
        this.changePlayerName = this.changePlayerName.bind(this);
    }
    
    changePlayerName(player) {
        const _player = { ...this.state[player] };
        const name = prompt("Új név?")
        if(name) { _player.name= name; this.setState({ [player]: _player }); }
    }

    handlePlusClick(player) {
        const _player = { ...this.state[player] };
        const opposite = { ...this.state[player == "player1" ? "player2" : "player1"] }
        if(_player.points == this.state.maxPoints - 1) {
            if(_player.setWins == 2) {
                alert(`Set won by ${ _player.name }!`);
                _player.points = 0;
                _player.setWins = 0;
                opposite.points = 0;
                opposite.setWins = 0;
            } else {
                _player.points = 0;
                opposite.points = 0;
                _player.setWins++;
            }
        } else {
            _player.points++;
        }
        this.setState({ [player]: _player, [player == "player1" ? "player2" : "player1"]: opposite })
    }
    
    handleMinusClick(player) {
        const _player = { ...this.state[player] }
        const { points, setWins } = _player;
        if(points) _player.points--
        else if(setWins) {
            _player.setWins--;
            _player.points = this.state.maxPoints - 1;
        }
        this.setState({ [player]: _player });

    }

    cancelReset() {
        this.setState({ reset: "" });
        this.resetOut();
    }

    confirmReset() {
        this.cancelReset();
        const { player1, player2 } = { ...this.state }
        player1.points = 0;
        player1.setWins = 0;
        player2.points = 0;
        player2.setWins = 0;

        this.setState({ player1: player1, player2: player2 })
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
            setTimeout(() => this.setState({ classStart: "", nameContainerClass: "active" }), 1000)
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

                    <div onClick={ e => this.changePlayerName("player1") } className={ `name-container first ${ this.state.nameContainerClass }` }>
                        <span>{ this.state.player1.name }</span>
                    </div>
                    
                    <div onClick={ e => this.changePlayerName("player2") } className={ `name-container second ${ this.state.nameContainerClass }` }>
                        <span>{ this.state.player2.name }</span>
                    </div>

                        <div className={ "player-set-container" }>
                            <div className={ "player-set first" }>{ this.state.player1.setWins }</div>
                            <div className={ "player-set second" }>{ this.state.player2.setWins }</div>
                        </div>

                        <div onClick={ e => this.handleMinusClick("player1") } className={ `minus-button first ${ this.state.classStart }` }></div>
                        <div onClick={ e => this.handleMinusClick("player2") } className={ `minus-button second ${ this.state.classStart }` }></div>

                        <div onClick={ e => { this.handlePlusClick("player1") } } className={ "tri-field-big" }></div>
                        <div onClick={ e => { this.handlePlusClick("player2") } } className={ "tri-field-big" }></div>

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