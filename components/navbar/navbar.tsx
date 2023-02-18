import React, { useState } from "react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

type Project = {
    name: string;
    route: string;
};

type NavbarProps = {
};

const Navbar = (_props: NavbarProps) => {
    const [isShown, setIsShown] = useState(false);
    const router = useRouter();

    const projects: Project[] = [
        {
            name: "Test",
            route: "/test",
        },
        {
            name: "Test2",
            route: "/test",
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
                                {projects.map(({ name, route }, index) => (
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
                                ))}
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
