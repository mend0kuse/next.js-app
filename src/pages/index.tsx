import Button from '@components/UI/Button';
import H from '@components/UI/HTag';
import P from '@components/UI/PTag';
import Tag from '@components/UI/Tag';

export default function Home() {
	return (
		<>
			<H tag='h1'>Текст</H>
			<Button appearance='ghost' arrow='right'>
				Узнать подробнее
			</Button>
			<P size='xl'>Lorem ipsum dolor sit, amet consectetur adipisicing.</P>
			<Tag color='primary'>ФЫВфЫВ</Tag>
		</>
	);
}
