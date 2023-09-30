import { NavbarProps } from "@/components/navbar/navbar";
import Layout from "../components/layout/layout";
import { useEffect } from "react";
import Centered from "@/components/layout/centered";

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
        },
      },
    },
  };
}

type HomeProps = {
  navbarProps: NavbarProps;
};

export default function Home({ navbarProps }: HomeProps) {
  useEffect(() => {
    document.title = "Home | Rang Corp";
  }, []);

  return (
    <>
      <Layout navbarProps={navbarProps}>
        <Centered>
          <span>
            This site has a couple of demonstrations of random things. Use the
            Projects drop down to explore them all!
          </span>
        </Centered>
      </Layout>
    </>
  );
}
