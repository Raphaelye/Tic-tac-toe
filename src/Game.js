import React, {useState}  from 'react'
import './Game.css'

function Game() {
    const [active, setActive] = useState(false);
    const [activex, setActivex] = useState(true);
    // const [opt, setOpt] = useState("");

    
    function showGame() {
        setActive(!active);
        setActivex(!activex);
    }

    




    return (
        <div className='game-body'>
            <div className="head">
                <span className={activex ? "player-x" : ""}>Player-X</span>
                <span className={active ? "player-o" : ""}>Player-O</span>
            </div>
            <div className="board">
                <div className="board-tile tile" onClick={showGame}>X</div>
                <div className="board-tile tile" onClick={showGame}>X</div>
                <div className="board-tile"      onClick={showGame}>O</div>
                <div className="board-tile tile" onClick={showGame}>O</div>
                <div className="board-tile tile" onClick={showGame}>X</div>
                <div className="board-tile"      onClick={showGame}>O</div>
                <div className="board-tile tile" onClick={showGame}>X</div>
                <div className="board-tile tile" onClick={showGame}>O</div>
                <div className="board-tile"      onClick={showGame}>O</div>
            </div>
        </div>
    );
}

export default Game
