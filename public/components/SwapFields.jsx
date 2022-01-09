const SwapFields = ({ player1, player2, spreadPlayer1, spreadPlayer2 }) => {

    const swapFields = () => {
        const _player1 = { ...player1 };
        spreadPlayer1(player2)
        spreadPlayer2(_player1)
    }

    return <>
        <div className={ "swap-main-container" } onClick={ swapFields }>
            <div className={ "swap-pointer first" }>
                <div className={ "swap-pointer-line" }></div>
                <div className={ "swap-pointer-triangle" }></div>
            </div>
            <div className={ "swap-pointer second" }>
                <div className={ "swap-pointer-line" }></div>
                <div className={ "swap-pointer-triangle" }></div>
            </div>
        </div>
    </>
}
export default SwapFields