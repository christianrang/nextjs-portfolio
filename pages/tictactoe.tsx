import Layout from "@/components/layout/layout";
import TicTacToeGame from "@/components/tictactoe/tictactoe";
import { useState, useEffect } from "react";
import Dashboard, { DashboardProps } from "@/components/tictactoe/dashboard";
import { NavbarProps } from "@/components/navbar/navbar";

export async function getStaticProps() {
  const isSortEnabled = process.env.NAVBAR_SORT_ENABLED;
  const isPathfinderEnabled = process.env.NAVBAR_PATHFIND_ENABLED;
  const isTicTacToeEnabled = process.env.NAVBAR_TICTACTOE_ENABLED;

  return {
    props: {
      navbarProps: {
        enabledRoutes: {
          isSortEnabled: isSortEnabled,
          isPathfinderEnabled: isPathfinderEnabled,
          isTicTacToeEnabled: isTicTacToeEnabled,
        }
      }
    },
  };
}

type TicTacToeProps = {
  navbarProps: NavbarProps,
}

const TicTacToe = ({navbarProps}: TicTacToeProps) => {
    const [playerState, setPlayerState] = useState<DashboardProps>({
        data: { player1Wins: 0, player2Wins: 0 },
    });

    useEffect(() => {
        document.title = "TicTacToe | Rang Corp";
    }, []);

    return (
        <>
            <Layout navbarProps={navbarProps}>
                <h1>Tic Tac Toe</h1>
                <Dashboard data={playerState.data} />
                <TicTacToeGame
                    playerState={playerState}
                    setPlayerState={setPlayerState}
                />
            </Layout>
        </>
    );
};

export default TicTacToe;
