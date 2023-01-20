import cn from 'classnames';
import SortIco from 'src/icons/sort';
import { SortEnum } from 'src/utils/enums';

import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import styles from './sort.module.scss';

interface SortProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	sort: SortEnum;
	setSort: (sort: SortEnum) => void;
}

const Sort: FC<SortProps> = ({ setSort, sort, className, ...props }) => {
	return (
		<div className={cn(styles.wrapper, className)} {...props}>
			<button
				className={cn(styles.btn, {
					[styles.active]: sort === SortEnum.Rating,
				})}
				onClick={() => setSort(SortEnum.Rating)}
			>
				<SortIco />
				По рейтингу
			</button>
			<button
				className={cn(styles.btn, {
					[styles.active]: sort === SortEnum.Price,
				})}
				onClick={() => setSort(SortEnum.Price)}
			>
				<SortIco />
				По цене
			</button>
		</div>
	);
};

export default Sort;
