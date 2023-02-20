import Sorter from '../components/sorter/sorter';
import Layout from '../components/layout/layout';
import { useEffect } from 'react';

const Sort = () => {
    useEffect(() => {
        document.title = "Sorter | Rang Corp";
    }, []);

    return (
        <Layout>
            <Sorter />
        </Layout>
    )
}

export default Sort;
