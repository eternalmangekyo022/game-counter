import { Component } from 'react'

class NameContainer extends Component {
    constructor({ className, player, classNum }) {
        super();

        this.player = player;
        this.classNum = classNum;
        this.state = {
            className: className,
        };
        this.changePlayerName = this.changePlayerName.bind(this);
    }

    changePlayerName() {
        let name = prompt("Új név?");
        if(name) this.player.name = name;
        this.forceUpdate();
    }

    componentDidMount() {
        (async function() {
            setTimeout(() => { this.setState({ className: "active" }) }, 1000)
        }());
    }

    render() {
        return <>
            <div onClick={ this.changePlayerName } className={ `name-container ${ this.classNum } ${ this.state.className }` }>
                <span>{ this.player.name }</span>
            </div>
        </>
    }
}

export default NameContainer