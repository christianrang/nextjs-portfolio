import Layout from "../components/layout/layout";
import { useEffect } from "react";

const Sort = () => {

    useEffect(() => {
        document.title = "Pathfind | Rang Corp";
    }, []);

    return (
        <Layout>
            <h1>Pathfind</h1>
        </Layout>
    );
};

export default Sort;
