import { SortEnum } from 'src/utils/enums';

import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import H from '@components/UI/HTag';
import Tag from '@components/UI/Tag';
import Sort from '@components/sort';

import styles from './topPageComp.module.scss';

interface TopPageHeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	sort: SortEnum;
	setSort: (sort: SortEnum) => void;
	name: string;
	count: number;
}

const TopPageHeader: FC<TopPageHeaderProps> = ({ setSort, sort, name, count }) => {
	return (
		<div className={styles.header}>
			<H tag='h1'>{name}</H>
			<Tag color='grey' size='m'>
				{count}
			</Tag>
			<Sort sort={sort} setSort={setSort} />
		</div>
	);
};

export default TopPageHeader;
