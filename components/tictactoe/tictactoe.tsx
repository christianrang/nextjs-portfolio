import React, { useState, Dispatch, SetStateAction } from "react";
import styles from "@/styles/TicTacToe.module.css";
import { DashboardProps } from "./dashboard";

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
  movesCount: number;
  gameOver: boolean;
  player1Wins: number;
  player2Wins: number;
};

const cleanBoard = [
  [XO.Empty, XO.Empty, XO.Empty],
  [XO.Empty, XO.Empty, XO.Empty],
  [XO.Empty, XO.Empty, XO.Empty],
];

// TODO: this is jank, but it works until I can figure out the right way.
const validateBoardState = (
  board: BoardState,
  setWinner: (winner: PlayerType) => void
) => {
  // Check horizontal
  for (let row of board.rows) {
    let numberOfX = 0;
    let numberOfO = 0;

    for (let item of row) {
      if (item === XO.X) {
        if (numberOfO !== 0) {
          break;
        }
        numberOfX++;
      }
      if (item === XO.O) {
        if (numberOfX !== 0) {
          break;
        }
        numberOfO++;
      }
    }
    if (numberOfX === 3) {
      setWinner(Player1);
    }
    if (numberOfO === 3) {
      setWinner(Player2);
    }
  }
  // Check vertical
  for (let x = 0; x < 3; x++) {
    let numberOfX = 0;
    let numberOfO = 0;

    for (let y = 0; y < 3; y++) {
      let item = board.rows[y][x];
      if (item === XO.X) {
        if (numberOfO !== 0) {
          break;
        }
        numberOfX++;
      }
      if (item === XO.O) {
        if (numberOfX !== 0) {
          break;
        }
        numberOfO++;
      }
    }
    if (numberOfX === 3) {
      setWinner(Player1);
    }
    if (numberOfO === 3) {
      setWinner(Player2);
    }
  }

  const diagonals: BoardCoord[][] = [
    [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 1,
      },
      {
        x: 2,
        y: 2,
      },
    ],
    [
      {
        x: 2,
        y: 0,
      },
      {
        x: 1,
        y: 1,
      },
      {
        x: 0,
        y: 2,
      },
    ],
  ];

  for (let diagonal of diagonals) {
    let numberOfX = 0;
    let numberOfO = 0;

    for (let coords of diagonal) {
      if (board.rows[coords.y][coords.x] === XO.X) {
        if (numberOfO > 0) {
          break;
        }
        numberOfX++;
      }
      if (board.rows[coords.y][coords.x] === XO.O) {
        if (numberOfX > 0) {
          break;
        }
        numberOfO++;
      }
    }
    if (numberOfX === 3) {
      setWinner(Player1);
    }
    if (numberOfO === 3) {
      setWinner(Player2);
    }
  }
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

type TicTacToeGameProps = {
  playerState: DashboardProps;
  setPlayerState: Dispatch<SetStateAction<DashboardProps>>;
};

const TicTacToeGame = ({ playerState, setPlayerState }: TicTacToeGameProps) => {
  const [boardState, setBoardState] = useState<BoardState>({
    rows: cleanBoard,
    winner: undefined,
    playerTurn: Player1,
    movesCount: 0,
    gameOver: false,
    player1Wins: 0,
    player2Wins: 0,
  });

  const resetBoardState = () => {
    setBoardState({
      ...boardState,
      rows: boardState.rows.map((row) => {
        return row.map(() => {
          return XO.Empty;
        });
      }),
      winner: undefined,
      playerTurn: Player1,
      movesCount: 0,
      gameOver: false,
    });
  };

  const setWinner = (winner: PlayerType) => {
    let player1wins = boardState.player1Wins;
    let player2wins = boardState.player2Wins;

    switch (winner) {
      case Player1:
        player1wins++;
        break;
      case Player2:
        player2wins++;
    }
    setPlayerState({
      data: {
        player1Wins: player1wins,
        player2Wins: player2wins,
      },
    });
    setBoardState({
      ...boardState,
      winner: winner,
      gameOver: true,
      player1Wins: player1wins,
      player2Wins: player2wins,
    });
  };

  const setPlayerTurn = (player: PlayerType) => {
    let value = boardState.movesCount + 1;
    setBoardState({
      ...boardState,
      playerTurn: player,
      movesCount: value,
    });
  };

  const setXO = (coord: BoardCoord, value: XO) => {
    let newRows = boardState.rows.map((value) => {
      return value;
    });

    if (newRows[coord.y][coord.x] !== XO.Empty || boardState.gameOver) {
      return false;
    }

    newRows[coord.y][coord.x] = value;
    setBoardState({
      ...boardState,
      rows: newRows,
    });
    return true;
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
        <div className={styles.boardContainer}>
          <>
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
                      let didSet = setXO(
                        block.coords,
                        boardState.playerTurn.marker
                      );
                      if (didSet) {
                        togglePlayerTurn(boardState.playerTurn);
                        validateBoardState(boardState, setWinner);
                      }
                    }}
                  >
                    {boardState.rows[block.coords.y][block.coords.x]}
                  </div>
                );
              })}
            </div>
            {boardState.winner && <h2>Winner: {boardState.winner.name}</h2>}
            {boardState.gameOver && (
              <button
                className={styles.playagain}
                onClick={() => resetBoardState()}
              >
                Play Again
              </button>
            )}
            {boardState.movesCount === 9 && (
              <button
                className={styles.playagain}
                onClick={() => resetBoardState()}
              >
                Play Again
              </button>
            )}
          </>
      </div>
    </>
  );
};

export default TicTacToeGame;
