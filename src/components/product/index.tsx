import cn from 'classnames';
import { env } from 'process';
import { ProductModel } from 'src/interfaces/product';

import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import Button from '@components/UI/Button';
import Tag from '@components/UI/Tag';
import StarRating from '@components/UI/star-rating';
import Card from '@components/card';

import styles from './product.module.scss';

interface ProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	product: ProductModel;
}

const Product: FC<ProductProps> = ({ product, className, ...props }) => {
	return (
		<Card className={styles.wrapper}>
			<div className={styles.logo}>
				<img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} />
			</div>
			<p className={styles.title}>{product.title}</p>
			<p className={styles.price}>{product.price}</p>
			<p className={styles.credit}>{product.credit}</p>
			<StarRating className={styles.rating} rating={product.reviewAvg ?? product.initialRating} />
			<div className={styles.tags}>
				{product.categories.map((item) => (
					<Tag key={item} color='ghost'>
						{item}
					</Tag>
				))}
			</div>
			<p className={styles.priceTitle}>цена</p>
			<p className={styles.creditTitle}>кредит</p>
			<p className={styles.reviewCount}>{product.reviewCount}</p>
			<div className={styles.hr}></div>
			<p className={styles.desc}>{product.description}</p>
			<p className={styles.feature}>фичи</p>
			<div className={styles.advBlock}>
				<div className={styles.adv}>
					<p>Преимущества</p>
					<div>{product.advantages}</div>
				</div>
				<div className={styles.disAdv}>
					<p>Недостатки</p>
					{product.disadvantages}
				</div>
			</div>
			<div className={styles.hr}></div>
			<div className={styles.actions}>
				<Button appearance='primary'>Подробнее</Button>
				<Button appearance='ghost'>Читать отзывы</Button>
			</div>
		</Card>
	);
};

export default Product;
