import { Component } from 'react'

class MinusButton extends Component {
    constructor({ player, num, ref }) {
        super();
        this.num = num
        this.ref = ref
        this.state = {
            player,
            classStart: "start",
        }
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    
    handleNegativePoints() {
        alert("Has to be more than 0")
    }

    handleOnClick() {
        let { points } = this.state.player;
        if(points == 0) {
            this.handleNegativePoints();
        } else {
            this.setState({ player: { points: points - 1 } });
        }
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

export default MinusButton