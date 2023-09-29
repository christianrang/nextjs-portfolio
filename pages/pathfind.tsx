import { NavbarProps } from "@/components/navbar/navbar";
import Layout, { LayoutProps } from "../components/layout/layout";
import { useEffect } from "react";

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

type PathfindProps = {
  navbarProps: NavbarProps,
}

const Sort = ({navbarProps}: PathfindProps) => {

    useEffect(() => {
        document.title = "Pathfind | Rang Corp";
    }, []);

    return (
        <Layout navbarProps={navbarProps}>
            <h1>Pathfind</h1>
        </Layout>
    );
};

export default Sort;
