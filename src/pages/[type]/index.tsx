import axios from 'axios';
import { ParsedUrlQuery } from 'querystring';
import { MenuItem } from 'src/interfaces/menu';
import { withLayout } from 'src/layout';
import { firstLvlMenu } from 'src/utils/helpers';

import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';

function Type({ firstCategory }: TypeProps): JSX.Element {
	return <>Type: {firstCategory}</>;
}

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: firstLvlMenu.map((m) => m.route),
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
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
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory: firstCategoryItem.id,
	});
	return {
		props: {
			menu,
			firstCategory: firstCategoryItem.id,
		},
	};
};

interface TypeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
