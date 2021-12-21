import { Component, createRef } from 'react'
import Heading from '../../components/Heading'
import BackButton from '../../components/BackButton'
import MinusButton from '../../components/MinusButton'

const defaultPlayer = {
    name: "",
    points: 0,
    setWins: 0
}

export default class Taquball extends Component {
    constructor({  }) {
        super();
        
        this.state = {
            player1: defaultPlayer,
            player2: defaultPlayer,
            reset: ""
        };

        this.minusButtonFirst = createRef();
        this.minusButtonSecond = createRef();

        this.handleResetButton = this.handleResetButton.bind(this);
        this.cancelReset = this.cancelReset.bind(this);
        this.confirmReset = this.confirmReset.bind(this);
        
    }

    handleResetButton() {
        this.setState({ reset: "active" });
    }

    cancelReset() {
        this.setState({ reset: "" });
    }

    confirmReset() {

        this.cancelReset();
    }

    componentDidMount() {
        document.title = "GameCounter - Teqqball";
    }

    render() {
        return(
            <>
                <Heading>
                    <BackButton />
                    <div onClick={ this.handleResetButton } className={ "reset-button-container" }>
                        <div>!</div>
                    </div>
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
                <div className={ `reset-container ${ this.state.reset }` }>
                    <div className={ `reset-popup ${ this.state.reset }` }>
                        <div className="reset-text-container">
                            <div className="reset-text">Reset?</div>
                        </div>
                        <div className="reset-cancel-container">
                            <div onClick={ this.cancelReset } className="reset-cancel"></div>
                        </div>
                        <div className="reset-confirm-container">
                            <div onClick={ this.confirmReset } className="reset-confirm"></div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}