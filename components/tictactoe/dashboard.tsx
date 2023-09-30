import styles from "@/styles/TicTacToe.module.css";

type DashboardProps = {
  data: PlayerData;
};

type PlayerData = {
  player1Wins: number;
  player2Wins: number;
};

const Dashboard = ({ data }: DashboardProps) => {
  return (
    <>
      <div className={styles.dashboard}>
        <p>
          <strong>Score:</strong>
        </p>
        <p>Player X: {data.player1Wins}</p>
        <p>Player O: {data.player2Wins}</p>
      </div>
    </>
  );
};

export type { DashboardProps };
export default Dashboard;
