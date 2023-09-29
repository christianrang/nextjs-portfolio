import Sorter from '../components/sorter/sorter';
import Layout from '../components/layout/layout';
import { useEffect } from 'react';
import { NavbarProps } from '@/components/navbar/navbar';

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

type SortProps = {
  navbarProps: NavbarProps,
}

const Sort = ({navbarProps}: SortProps) => {
    useEffect(() => {
        document.title = "Sorter | Rang Corp";
    }, []);

    return (
        <Layout navbarProps={navbarProps}>
            <Sorter />
        </Layout>
    )
}

export default Sort;
