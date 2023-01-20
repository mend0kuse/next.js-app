import { TopLevelCategory, TopPageModel } from 'src/interfaces/page';
import { ProductModel } from 'src/interfaces/product';

import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import H from '@components/UI/HTag';
import Tag from '@components/UI/Tag';
import Card from '@components/card';
import Vacancies from '@components/vacancies';

import styles from './topPageComp.module.scss';

interface TopPageComponentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	page: TopPageModel;
	firstCategory: TopLevelCategory;
	products: ProductModel[];
}

const TopPageComponent: FC<TopPageComponentProps> = ({ firstCategory, page, products }) => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<H tag='h1'>{page.title}</H>
				{products && (
					<Tag color='grey' size='m'>
						{products.length}
					</Tag>
				)}
				<span>сортировка</span>
			</div>
			<ul>{products && products.map((item) => <li key={item._id}>{item.title}</li>)}</ul>
			{firstCategory == TopLevelCategory.Courses && page.hh && (
				<Vacancies category={page.category} hhData={page.hh}></Vacancies>
			)}
		</div>
	);
};

export default TopPageComponent;
