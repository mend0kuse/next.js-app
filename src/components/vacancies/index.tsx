import CircleStar from 'src/icons/circleStar';
import { HhData, TopPageModel } from 'src/interfaces/page';
import { toPriceRU } from 'src/utils/helpers/price';

import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import H from '@components/UI/HTag';
import Tag from '@components/UI/Tag';
import Card from '@components/card';

import styles from './vacancies.module.scss';

interface VacanciesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	hhData: HhData;
	category: TopPageModel['category'];
}

const Vacancies: FC<VacanciesProps> = ({ category, hhData }) => {
	const salaryGrade = [
		{ id: 1, level: 'Начальный', salary: hhData.juniorSalary },
		{ id: 2, level: 'Средний', salary: hhData.middleSalary },
		{ id: 3, level: 'Профессионал', salary: hhData.seniorSalary },
	];

	return (
		<>
			<div className={styles.title}>
				<H tag='h2'>Вакансии - {category}</H>
				<Tag color='red'>hh.ru</Tag>
			</div>

			<div className={styles.inner}>
				<Card className={styles.count}>
					<p className={styles.all}>Всего вакансий</p>
					<p className={styles.total}>{hhData.count}</p>
				</Card>

				<div className={styles.salaries}>
					{salaryGrade.map((item) => {
						const filledStarsCount = new Array(item.id).fill('star');
						const defalutStarsCount = new Array(3 - item.id).fill('star');

						return (
							<Card key={item.id} className={styles.grade}>
								<p className={styles.all}>{item.level}</p>
								<p className={styles.salary}>{toPriceRU(item.salary)}</p>
								<div className={styles.stars}>
									{filledStarsCount.map((item, i) => (
										<CircleStar fill key={i} />
									))}

									{defalutStarsCount.map((item, i) => (
										<CircleStar key={i} />
									))}
								</div>
							</Card>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Vacancies;
