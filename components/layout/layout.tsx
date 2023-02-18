import Navbar from "../navbar/navbar";
import styles from "@/styles/Layout.module.css";
import {ReactNode} from 'react';

type LayoutProps = {
    children: ReactNode,
}


const Layout = (props: LayoutProps) => {
    return (
        <>
            <div className={styles.container}>
                <Navbar />
                <div className={styles.contained}>{props.children}</div>
            </div>
        </>
    );
};

export default Layout;
