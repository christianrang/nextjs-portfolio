import Layout from "../components/layout/layout";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        document.title = "Home | Rang Corp";
    }, []);

    return (
        <>
            <Layout>
                <span>This site has a couple of demonstrations of random things. Use the Projects drop down to explore them all!</span>
            </Layout>
        </>
    );
}
