import { Component, createRef } from 'react'
import Heading from '../../components/Heading'
import BackButton from '../../components/BackButton'
import ResetButton from '../../components/ResetButton'

class MinusButton extends Component {
    constructor({ player, num, ref }) {
        super()
        this.num = num
        this.ref = ref
        this.state = {
            player,
            classStart: "start",
        }
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleMinusPoints = this.handleMinusPoints.bind(this)
    }

    handleMinusPoints() {
        alert("Has to be more than 0")
    }

    handleOnClick() {
        this.setState(prev => {
            if(prev.player.points > 0) {
                return { player: { points: prev.player.points - 1 } }
            } else {
                this.handleMinusPoints()
            }
        });
    }

    componentDidMount() {
        (async function() {
            setTimeout(() => this.setState({ classStart: "" }), 1000)
        }());
    }

    render() {
        return(
            <>
                <div onClick={ this.handleOnClick } ref={ this.ref } className={ `minus-button ${ this.state.classStart } ${ this.num }` }></div>
            </>
        )
    }
}


export default class Taquball extends Component {
    constructor({  }) {
        super();
        const defaultPlayer = {
            name: "",
            points: 0,
            setWins: 0
        } 
        this.state = {
            player1: defaultPlayer,
            player2: defaultPlayer
        };

        this.minusButtonFirst = createRef();
        this.minusButtonSecond = createRef();
    }

    componentDidMount() {
        document.title = "GameCounter - Teqqball";
    }

    render() {
        return(
            <>
                <Heading>
                    <BackButton />
                    <ResetButton />
                </Heading>
                <div className={ "content-wrapper" }>


                    <div className={ "tri-field-container" }>

                    <MinusButton num={ "first" } ref={ this.minusButtonFirst } player={ this.state.player1 }/>
                    <MinusButton num={ "second" } ref={ this.minusButtonSecond } player={ this.state.player2 } />

                        <div className={ "tri-field-big first" }></div>
                        <div className={ "tri-field-big" }></div>

                        <div className={ "tri-field-middle" }>

                        </div>

                    </div>

                </div>
            </>
        )
    }
}