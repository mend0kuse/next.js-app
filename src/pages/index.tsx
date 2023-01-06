import { withLayout } from 'src/layout';

import { useState } from 'react';

import Button from '@components/UI/Button';
import H from '@components/UI/HTag';
import P from '@components/UI/PTag';
import Tag from '@components/UI/Tag';
import StarRating from '@components/UI/star-rating';

export function Home() {
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
		</>
	);
}

export default withLayout(Home);
