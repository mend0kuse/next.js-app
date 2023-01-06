import axios from 'axios';
import { MenuItem } from 'src/interfaces/menu';
import { withLayout } from 'src/layout';

import { GetStaticProps } from 'next';
import { FC, useState } from 'react';

import Button from '@components/UI/Button';
import H from '@components/UI/HTag';
import P from '@components/UI/PTag';
import Tag from '@components/UI/Tag';
import StarRating from '@components/UI/star-rating';

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}

export const Home: FC<HomeProps> = ({ menu }) => {
	const [rat, setRat] = useState(3);
	return (
		<>
			<H tag='h1'>Текст</H>
			<Button appearance='ghost' arrow='right'>
				Узнать подробнее
			</Button>
			<P size='xl'>Lorem ipsum dolor sit, amet consectetur adipisicing.</P>
			<Tag color='primary'>ФЫВфЫВ</Tag>
			<StarRating rating={rat} setRating={setRat} />
			<ul>
				{menu.map((item) => {
					return <li key={item._id.secondCategory}>{item._id.secondCategory}</li>;
				})}
			</ul>
		</>
	);
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory: 0,
	});
	return {
		props: {
			menu,
			firstCategory: 0,
		},
	};
};
