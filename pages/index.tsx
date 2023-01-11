import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import { Button, Htag, P, Rating, Tag} from '../components';
import { withLayout } from '../layout/Layout';
import { MenuItem } from '../Interfaces/menu.interface';


function Home({ menu }: HomeProps): JSX.Element {
    const [rating, setRating] = useState<number>(4);

    return (
        <>
            <Htag tag='h1'>Заголовок</Htag>
            <Button appearance='primary' arrow='right'>Кнопка</Button>
            <Button appearance='ghost' arrow='down'>Кнопка</Button>
            <P size='l'>Большой</P>
            <P>Средний</P>
            <P size='s'>Маленький</P>
            <Tag size='s'>Ghost</Tag>
            <Tag size='m' color='red'>Red</Tag>
            <Tag size='s' color='green'>Green</Tag>
            <Tag color='primary'>Green</Tag>
            <Rating rating={rating} isEditable setRating={setRating} />
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    // const {data: menu }= await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    //     firstCategory
    // }, {
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     responseType: "json",
    //     responseEncoding: "utf-8"
    // });

    const response: Response = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({firstCategory: 0})
    });
    const menu = await response.json();
    return {
        props: {
            menu,
            firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}