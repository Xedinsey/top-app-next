import React from "react";
import {withLayout} from "../../layout/Layout";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import axios from "axios";
import {MenuItem} from "../../Interfaces/menu.interface";
import {TopPageModel} from "../../Interfaces/page.inteface";
import {ProductModel} from "../../Interfaces/product.interface";
import {API} from "../../helpers/api";

const firstCategory = 0;

function Course({menu, page, products}: CourseProps): JSX.Element {
    return (
        <>

        </>
    );
}

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
    const {data: menu} = await axios.post<MenuItem[]>(API.topPage.find + '/api/top-page/find', {
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
    const {data: page} = await axios.get<TopPageModel>(API.topPage.byAlias + '/api/top-page/byAlias/' + params.alias);
    const {data: products} = await axios.post<ProductModel[]>(API.product.find + '/api/product/find', {
        category: page.category,
        limit: 10
    });
    return {
        props: {
            menu,
            firstCategory,
            page,
            products
        }
    };
};

interface CourseProps extends Record<string, unknown>{
    menu: MenuItem[];
    firstCategory: number;
    page: TopPageModel;
    products: ProductModel[];
}