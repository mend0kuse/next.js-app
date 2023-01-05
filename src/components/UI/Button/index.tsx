import cn from 'classnames';

import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

import Arrow from '@components/UI/arrow';

import styles from './button.module.scss';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: React.ReactNode;
	appearance: 'primary' | 'ghost';
	arrow?: 'right' | 'down' | 'none';
}

const Button: FC<ButtonProps> = ({ arrow = 'none', appearance, children, className, ...props }) => {
	return (
		<button
			className={cn(styles.btn, className, {
				[styles.primary]: appearance === 'primary',
				[styles.ghost]: appearance === 'ghost',
			})}
			{...props}
		>
			{children}
			{arrow != 'none' && <Arrow down={arrow == 'down'} />}
		</button>
	);
};

export default Button;
