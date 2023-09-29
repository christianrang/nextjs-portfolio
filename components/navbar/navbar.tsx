import React, { useState } from "react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

type Project = {
  name: string;
  route: string;
  enabled: boolean;
};

// Thanks to getStaticProps not properly decoding the envars into types these
// must be strings and must be converted to booleans
type EnableRoutes = {
    isSortEnabled: string;
    isPathfinderEnabled: string;
    isTicTacToeEnabled: string;
}

type NavbarProps = {
  enabledRoutes?: EnableRoutes,
};

const StringToBool = (input: string) => {
  switch (input) {
    case 'true':
      return true
    case 'false':
      return false
  }

  return false
}

const Navbar = (props: NavbarProps) => {
  const [isShown, setIsShown] = useState(false);
  const router = useRouter();

  const isSortEnabled: boolean = props.enabledRoutes?.isSortEnabled === undefined ? false : StringToBool(props.enabledRoutes.isSortEnabled)
  const isPathfindEnabled = props.enabledRoutes?.isPathfinderEnabled === undefined ? false : StringToBool(props.enabledRoutes.isPathfinderEnabled)
  const isTicTacToeEnabled = props.enabledRoutes?.isTicTacToeEnabled === undefined ? false : StringToBool(props.enabledRoutes.isTicTacToeEnabled)

  const projects: Project[] = [
    {
      name: "Sort",
      route: "/sort",
      enabled: isSortEnabled,
    },
    {
      name: "Pathfind",
      route: "/pathfind",
      enabled: isPathfindEnabled,
    },
    {
      name: "Tic Tac Toe",
      route: "/tictactoe",
      enabled: isTicTacToeEnabled,
    },
  ];

  return (
    <>
      <div className={styles.navbarcontainer}>
        <div className={styles.navbaritem}>
          <Link href="/">Home</Link>
        </div>
        <div
          className={styles.navbaritem}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          Projects
          <>
            {isShown && (
              <>
                {projects.map(({ name, route, enabled }, index) => {
                  if (enabled) {
                    return (
                      <div
                        key={index}
                        className={styles.dropdownstyle}
                        onClick={() => {
                          router.push(route);
                        }}
                      >
                        <Link key={index} href={route}>
                          {name}
                        </Link>
                      </div>
                    );
                  }
                })}
              </>
            )}
          </>
        </div>
      </div>
    </>
  );
};

export type { NavbarProps };
export default Navbar;
