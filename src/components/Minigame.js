
import React, { useState, useEffect } from 'react';
import './Minigame.css';

const initialBoard = Array(9).fill(null);

const Minigame = ({ handleClose }) => {
    const [board, setBoard] = useState(initialBoard);
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState(null);

    // Reset game when component is unmounted or handleClose is called
    useEffect(() => {
        setBoard(initialBoard);
        setXIsNext(true);
        setWinner(null);
    }, [handleClose]); // Depend on handleClose to reset when parent tells it to close

    useEffect(() => {
        const currentWinner = calculateWinner(board);
        if (currentWinner) {
            setWinner(currentWinner);
        } else if (board.every(Boolean)) {
            setWinner("Draw");
        }
    }, [board]);

    const handleClick = (index) => {
        if (winner || board[index]) return;

        const newBoard = [...board];
        newBoard[index] = xIsNext ? 'X' : 'O';
        setBoard(newBoard);
        setXIsNext(!xIsNext);
    };

    const renderSquare = (index) => (
        <button className="square" onClick={() => handleClick(index)}>
            {board[index]}
        </button>
    );

    const resetGame = () => {
        setBoard(initialBoard);
        setXIsNext(true);
        setWinner(null);
    };

    let status;
    if (winner) {
        status = winner === "Draw" ? "It's a Draw!" : `Winner: ${winner}`;
    } else {
        status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    return (
        <div className="minigame-inpage-container">
            <button className="btn btn-outline-light mb-4" onClick={handleClose}>
                &larr; Back to About
            </button>
            <div className="minigame-content-wrapper">
                <h3 className="text-center mb-4">Tic-Tac-Toe</h3>
                <div className="status mb-3 text-center">{status}</div>
                <div className="board">
                    <div className="board-row">
                        {renderSquare(0)}
                        {renderSquare(1)}
                        {renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {renderSquare(3)}
                        {renderSquare(4)}
                        {renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {renderSquare(6)}
                        {renderSquare(7)}
                        {renderSquare(8)}
                    </div>
                </div>
                <button className="btn btn-outline-light mt-4" onClick={resetGame}>Reset Game</button>
            </div>
        </div>
    );
};

// Helper function to calculate winner
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Minigame;
