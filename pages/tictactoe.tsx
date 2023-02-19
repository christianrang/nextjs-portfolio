import Layout from "@/components/layout/layout";
import TicTacToeGame from "@/components/tictactoe/tictactoe";
import { useState } from "react";
import Dashboard, {DashboardProps} from "@/components/tictactoe/dashboard";

const TicTacToe = () => {
    const [playerState, setPlayerState] = useState<DashboardProps>({data: {player1Wins: 0, player2Wins: 0}});
    return (
        <>
            <Dashboard data={playerState.data}/>
            <Layout>
                <h1>Tic Tac Toe</h1>
                <TicTacToeGame playerState={playerState} setPlayerState={setPlayerState} />
            </Layout>
        </>
    );
};

export default TicTacToe;
