import {withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "../Interfaces/menu.interface";

function Home({menu, firstCategory}: HomeProps): JSX.Element {
    return (
        <>
            <ul>
                {menu.map(el => <li key={el._id.secondCategory}>{el._id.secondCategory}</li>)}
            </ul>
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown>{
    menu: MenuItem[],
    firstCategory: number;
}