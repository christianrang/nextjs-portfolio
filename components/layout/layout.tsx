import Navbar from "@/components/navbar/navbar";
import styles from "@/styles/Layout.module.css";
import { ReactNode } from "react";
import Footer from "./footer";

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <div className={styles.container}>
                <Navbar />
                <div className={styles.contained}>{children}</div>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
