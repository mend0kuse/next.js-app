import axios from 'axios';
import { ParsedUrlQuery } from 'querystring';
import { MenuItem } from 'src/interfaces/menu';
import { TopLevelCategory, TopPageModel } from 'src/interfaces/page';
import { ProductModel } from 'src/interfaces/product';
import { withLayout } from 'src/layout';
import TopPageComponent from 'src/pages-components/TopPageComponent';
import { firstLvlMenu } from 'src/utils/helpers';

import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { FC } from 'react';

interface TopPageProps extends Record<string, unknown> {
	menu: MenuItem[];
	page: TopPageModel;
	firstCategory: TopLevelCategory;
	products: ProductModel[];
}

export const TopPage: FC<TopPageProps> = ({ page, firstCategory, products, menu }) => {
	return <TopPageComponent firstCategory={firstCategory} page={page} products={products} />;
};

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
	let paths: string[] = [];
	for (const m of firstLvlMenu) {
		const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
			firstCategory: m.id,
		});
		paths = paths.concat(menu.flatMap((s) => s.pages.map((p) => `${m.route}/${p.alias}`)));
	}
	return {
		paths,
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps<TopPageProps> = async ({
	params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {
			notFound: true,
		};
	}

	const firstCategoryItem = firstLvlMenu.find((m) => m.route.split('/')[1] == params.type);

	if (!firstCategoryItem) {
		return {
			notFound: true,
		};
	}

	try {
		const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
			firstCategory: firstCategoryItem.id,
		});

		if (menu.length === 0) {
			return {
				notFound: true,
			};
		}

		const { data: page } = await axios.get<TopPageModel>(
			process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias,
		);

		const { data: products } = await axios.post<ProductModel[]>(
			process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find',
			{
				category: page.category,
				limit: 10,
			},
		);

		return {
			props: {
				menu,
				firstCategory: 0,
				page,
				products,
			},
		};
	} catch {
		return {
			notFound: true,
		};
	}
};
