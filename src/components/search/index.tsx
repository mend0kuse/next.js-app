import cn from 'classnames';
import SearchIco from 'src/icons/search';

import { useRouter } from 'next/router';
import React, { DetailedHTMLProps, FC, HTMLAttributes, useCallback, useState } from 'react';

import Button from '@components/UI/Button';
import Input from '@components/UI/input';

import styles from './search.module.scss';

interface SearchFieldProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const SearchField: FC<SearchFieldProps> = ({ className, ...props }) => {
	const router = useRouter();

	const [searchReq, setSearchReq] = useState('');

	const searchHandler = useCallback(() => {
		router.push({ pathname: '/search', query: { q: searchReq } });
	}, [searchReq]);

	const handleEnterDown = (e: KeyboardEvent) => {
		if (e.key == 'Enter') searchHandler();
	};

	return (
		<div className={cn(styles.search, className)} {...props}>
			<Input
				placeholder='Search...'
				className={styles.input}
				value={searchReq}
				onChange={(e) => setSearchReq(e.target.value)}
				onKeyDown={handleEnterDown}
			/>
			<Button onClick={searchHandler} className={styles.button} appearance='primary'>
				<SearchIco />
			</Button>
		</div>
	);
};

export default SearchField;
