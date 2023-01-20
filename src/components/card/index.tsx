import cn from 'classnames';

import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import styles from './card.module.scss';

interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	color?: 'white' | 'blue';
}

const Card: FC<CardProps> = ({ className, children, color = 'white', ...props }) => {
	return (
		<div className={cn(styles.card, className, { [styles.blue]: color === 'blue' })} {...props}>
			{children}
		</div>
	);
};

export default Card;
