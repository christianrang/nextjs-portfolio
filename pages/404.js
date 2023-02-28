import Layout from "@/components/layout/layout";
import { useEffect } from 'react';

const Custom404 = () => {
    useEffect(() => {
        document.title = "404 | Rang Corp";
    }, []);

  return <Layout>Uhhhh... I think you are lost. This is 404 Avenue.</Layout>;
};

export default Custom404;
