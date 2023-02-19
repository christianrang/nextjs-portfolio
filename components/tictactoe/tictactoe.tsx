import React, { useState } from "react";
import styles from "@/styles/TicTacToe.module.css";

enum XO {
    X = "X",
    O = "O",
    Empty = "",
}

type PlayerType = {
    marker: XO;
    name: string;
};

const Player1: PlayerType = {
    marker: XO.X,
    name: "Player X",
};

const Player2: PlayerType = {
    marker: XO.O,
    name: "Player O",
};

type BoardCoord = {
    x: number;
    y: number;
};

type BoardState = {
    winner?: PlayerType;
    rows: XO[][];
    playerTurn: PlayerType;
};

const cleanBoard = [
    [XO.Empty, XO.Empty, XO.Empty],
    [XO.Empty, XO.Empty, XO.Empty],
    [XO.Empty, XO.Empty, XO.Empty],
];

const validateBoardState = (
    board: BoardState,
    setWinner: (winner: PlayerType) => void
) => {
    let cursor: BoardCoord = { x: 0, y: 0 };
};

type BoardBlock = {
    coords: BoardCoord;
    id: string;
};

const boardDisplay: BoardBlock[] = [
    {
        coords: { x: 0, y: 0 },
        id: styles.block0,
    },
    {
        coords: { x: 1, y: 0 },
        id: styles.block1,
    },
    {
        coords: { x: 2, y: 0 },
        id: styles.block2,
    },
    {
        coords: { x: 0, y: 1 },
        id: styles.block3,
    },
    {
        coords: { x: 1, y: 1 },
        id: styles.block4,
    },
    {
        coords: { x: 2, y: 1 },
        id: styles.block5,
    },
    {
        coords: { x: 0, y: 2 },
        id: styles.block6,
    },
    {
        coords: { x: 1, y: 2 },
        id: styles.block7,
    },
    {
        coords: { x: 2, y: 2 },
        id: styles.block8,
    },
];

const TicTacToeGame = () => {
    const [boardState, setBoardState] = useState<BoardState>({
        rows: cleanBoard,
        winner: undefined,
        playerTurn: Player1,
    });

    const setWinner = (winner: PlayerType) => {
        setBoardState({
            ...boardState,
            winner: winner,
        });
    };

    const setPlayerTurn = (player: PlayerType) => {
        setBoardState({
            ...boardState,
            playerTurn: player,
        });
    };

    const setXO = (coord: BoardCoord, value: XO) => {
        let newRows = boardState.rows.map((value) => {
            return value;
        });

        if (newRows[coord.y][coord.x] !== XO.Empty) {
            return;
        }

        newRows[coord.y][coord.x] = value;
        setBoardState({
            ...boardState,
            rows: newRows,
        });
    };

    const togglePlayerTurn = (current: PlayerType) => {
        switch (current) {
            case Player1:
                setPlayerTurn(Player2);
                break;
            case Player2:
                setPlayerTurn(Player1);
                break;
        }
    };

    return (
        <>
            {boardState.winner && <h1>Winner: {boardState.winner.name}</h1>}
            {boardState.rows.map((row) => {
                row.map((value) => {
                    <p>{value}</p>;
                });
            })}
            <h2>Player Turn: {boardState.playerTurn.name}</h2>
            <div className={styles.board}>
                {boardDisplay.map((block, index) => {
                    return (
                        <div
                            key={index}
                            id={block.id}
                            className={styles.block}
                            onClick={() => {
                                setXO(
                                    block.coords,
                                    boardState.playerTurn.marker
                                );
                                togglePlayerTurn(boardState.playerTurn);
                            }}
                        >
                            {boardState.rows[block.coords.y][block.coords.x]}
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default TicTacToeGame;
