import React from "react";
import {withLayout} from "../../layout/Layout";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import axios from "axios";
import {MenuItem} from "../../Interfaces/menu.interface";
import {TopPageModel} from "../../Interfaces/page.inteface";
import {ProductModel} from "../../Interfaces/product.interface";

const firstCategory = 0;

function Course({menu, page, products}: CourseProps): JSX.Element {
    return (
        <>

        </>
    );
}
export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    return {
        paths: [],
        fallback: true
    };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }: GetStaticPropsContext) => {
    if (!params) {
        return {
            notFound: true
        };
    }
    const {data: page} = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias);
    const {data: products} = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
        category: page.category,
        limit: 10
    });
    return {
        props: {
            firstCategory,
            page,
            products
        }
    };
};

interface CourseProps extends Record<string, unknown>{
    firstCategory: number;
    page: TopPageModel;
    products: ProductModel[];
}