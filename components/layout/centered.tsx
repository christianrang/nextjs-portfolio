import styles from "@/styles/Layout.module.css";
import { ReactNode } from "react";

type CenteredProps = {
    children: ReactNode;
};

const Centered = ({ children }: CenteredProps) => {
    return (
        <>
            <div className={styles.centeredcontainer}>
                <div className={styles.centeredcontained}>{children}</div>
            </div>
        </>
    );
};

export default Centered;

