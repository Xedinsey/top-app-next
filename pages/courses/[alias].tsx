import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from 'next';
import React, { useState } from 'react';
import { withLayout } from '../../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../../Interfaces/menu.interface';
import { TopPageModel } from '../../Interfaces/page.interface';
import { ParsedUrlQuery } from 'node:querystring';
import { ProductModel } from '../../Interfaces/product.interface';



function Course({ menu, page, products }: CourseProps): JSX.Element {
    return (
        <>
            {/*{products && products.length}*/}
        </>
    );
}

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
    const response: Response = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({firstCategory: 0})
    });
    const menu: MenuItem[] = await response.json();
    return {
        paths: menu.flatMap(m => m.pages.map(p => '/courses/' + p.alias)),
        fallback: true
    };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    const firstCategory = 0;
    if (!params) {
        return {
            notFound: true
        };
    }
    const responseMenu: Response = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({firstCategory: 0})
    });
    const menu = await responseMenu.json();
    // const { data: page } = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias);
    // const { data: products } = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
    //     category: page.category,
    //     limit: 10
    // });

    return {
        props: {
            menu,
            firstCategory,
            // page,
            // products
        }
    };
};

interface CourseProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
    // page: TopPageModel;
    // products: ProductModel[];
}