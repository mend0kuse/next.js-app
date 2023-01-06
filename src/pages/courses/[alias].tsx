import axios from 'axios';
import { ParsedUrlQuery } from 'querystring';
import { MenuItem } from 'src/interfaces/menu';
import { TopPageModel } from 'src/interfaces/page';
import { ProductModel } from 'src/interfaces/product';
import { withLayout } from 'src/layout';

import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { FC, useState } from 'react';

interface CourseProps extends Record<string, unknown> {
	menu: MenuItem[];
	page: TopPageModel;
	firstCategory: number;
	products: ProductModel[];
}

export const Course: FC<CourseProps> = ({ page, products, menu }) => {
	return products && <>{products.length}</>;
};

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory: 0,
	});

	return {
		paths: menu.flatMap((item) => item.pages.map((p) => '/courses/' + p.alias)),
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {
			notFound: true,
		};
	}

	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory: 0,
	});

	const { data: page } = await axios.get<TopPageModel>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias,
	);

	const { data: products } = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
		category: page.category,
		limit: 10,
	});

	return {
		props: {
			menu,
			firstCategory: 0,
			page,
			products,
		},
	};
};
