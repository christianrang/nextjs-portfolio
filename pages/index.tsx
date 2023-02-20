import Layout from "../components/layout/layout";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        document.title = "Home | Rang Corp";
    }, []);

    return (
        <>
            <Layout>
                <h1>I can code</h1>
            </Layout>
        </>
    );
}
