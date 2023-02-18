import React, { useState } from "react";
import styles from "@/styles/Navbar.module.css";
import Link from 'next/link'

type project = {
    name: string;
    route: string;
};

const Navbar = ({}) => {
    const [isShown, setIsShown] = useState(false);

    const projects: project[] = [
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
                                    <div key={index} className={styles.dropdownstyle}>
                                        <Link key={index} href={route}>{name}</Link>
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

export default Navbar;
