import cn from 'classnames';
import { ProductModel } from 'src/interfaces/product';
import { declOfNum, toPriceRU } from 'src/utils/helpers/price';

import Image from 'next/image';
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
			<Image
				className={styles.logo}
				width={70}
				height={70}
				src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
				alt={product.title}
			/>
			<p className={styles.title}>{product.title}</p>
			<p className={styles.price}>
				{toPriceRU(product.price)}
				{product.oldPrice && <Tag color='green'>{toPriceRU(product.price - product.oldPrice)}</Tag>}
			</p>
			<p className={styles.credit}>
				{toPriceRU(product.credit)}/<span className={styles.month}>мес</span>
			</p>
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
			<p className={styles.reviewCount}>
				{product.reviewCount + ' ' + declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
			</p>
			<div className={styles.hr}></div>
			<p className={styles.desc}>{product.description}</p>
			<p className={styles.feature}>
				{product.characteristics.map((c) => (
					<div key={c.name} className={styles.charact}>
						<p className={styles.charactName}>{c.name}</p>
						<span className={styles.charactDots}></span>
						<p className={styles.charactValue}>{c.value}</p>
					</div>
				))}
			</p>
			<div className={styles.advBlock}>
				{product.advantages && (
					<div className={styles.adv}>
						<p className={styles.advBlockTitle}>Преимущества:</p>
						<div>{product.advantages}</div>
					</div>
				)}
				{product.disadvantages && (
					<div className={styles.disAdv}>
						<p className={styles.advBlockTitle}>Недостатки:</p>
						{product.disadvantages}
					</div>
				)}
			</div>
			<div className={cn(styles.hr, styles.hr2)}></div>
			<div className={styles.actions}>
				<Button appearance='primary'>Подробнее</Button>
				<Button arrow='right' appearance='ghost'>
					Читать отзывы
				</Button>
			</div>
		</Card>
	);
};

export default Product;
