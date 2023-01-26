import { TopLevelCategory, TopPageModel } from 'src/interfaces/page';
import { ProductModel } from 'src/interfaces/product';
import { SortEnum } from 'src/utils/enums';

import React, { DetailedHTMLProps, FC, HTMLAttributes, useReducer } from 'react';

import H from '@components/UI/HTag';
import Tag from '@components/UI/Tag';
import Advantages from '@components/advantages';
import Product from '@components/product';
import { SortReducer } from '@components/sort/sort.reducer';
import Vacancies from '@components/vacancies';

import TopPageHeader from './header';
import styles from './topPageComp.module.scss';

interface TopPageComponentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	page: TopPageModel;
	firstCategory: TopLevelCategory;
	products: ProductModel[];
}

const TopPageComponent: FC<TopPageComponentProps> = ({ firstCategory, page, products }) => {

	const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(SortReducer, {
		sort: SortEnum.Rating,
		products,
	});

	const setSort = (sort: SortEnum) => {
		dispatchSort({ type: sort });
	};

	return (
		<div className={styles.container}>
			{products && <TopPageHeader name={page.title} count={products.length} setSort={setSort} sort={sort} />}

			<ul>{sortedProducts && sortedProducts.map((item) => <Product product={item} key={item._id} />)}</ul>

			{firstCategory == TopLevelCategory.Courses && page.hh && (
				<Vacancies category={page.category} hhData={page.hh}></Vacancies>
			)}

			{page.advantages && page.advantages.length > 0 && (
				<>
					<H tag='h2' className={styles.suptitle}>
						Преимущества
					</H>
					<Advantages advantages={page.advantages} className={styles.advantages} />
				</>
			)}

			<H tag='h2' className={styles.suptitle}>
				Получаемые навыки
			</H>

			<div className={styles.tags}>
				{page.tags.map((tag) => (
					<Tag key={tag} color='primary'>
						{tag}
					</Tag>
				))}
			</div>
		</div>
	);
};

export default TopPageComponent;
