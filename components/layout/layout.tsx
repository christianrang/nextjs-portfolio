import Navbar, { NavbarProps } from "@/components/navbar/navbar";
import styles from "@/styles/Layout.module.css";
import { ReactNode } from "react";
import Footer from "./footer";

export type LayoutProps = {
  children: ReactNode;
  navbarProps?: NavbarProps;
};

const Layout = ({ children, navbarProps }: LayoutProps) => {
  return (
    <>
      <div className={styles.container}>
        <Navbar enabledRoutes={navbarProps?.enabledRoutes} />
        <div className={styles.contained}>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
