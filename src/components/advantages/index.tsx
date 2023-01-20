import cn from 'classnames';
import AdvantagesIcon from 'src/icons/advantages';
import { TopPageAdvantage } from 'src/interfaces/page';
import { ProductModel } from 'src/interfaces/product';

import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import H from '@components/UI/HTag';

import styles from './advantages.module.scss';

interface AdvantagesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	advantages: TopPageAdvantage[];
}

const Advantages: FC<AdvantagesProps> = ({ advantages, className, ...props }) => {
	return (
		<div className={cn(styles.wrapper, className)} {...props}>
			{advantages.map((adv) => (
				<div key={adv._id} className={styles.adv}>
					<AdvantagesIcon />
					<span className={styles.line} />
					<p className={styles.title}>{adv.title}</p>
					<p className={styles.text}>{adv.description}</p>
				</div>
			))}
		</div>
	);
};

export default Advantages;
