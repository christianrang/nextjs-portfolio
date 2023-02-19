import Layout from "@/components/layout/layout";
import TicTacToeGame from "@/components/tictactoe/tictactoe";

const TicTacToe = () => {
    return (
        <>
            <Layout>
                <h1>Tic Tac Toe</h1>
                <TicTacToeGame />
            </Layout>
        </>
    );
};

export default TicTacToe;
