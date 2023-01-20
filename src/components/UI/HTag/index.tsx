import cn from 'classnames';

import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import styles from './titleTag.module.scss';

interface HtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	tag: 'h1' | 'h2' | 'h3';
	children: React.ReactNode;
}

const H: FC<HtagProps> = ({ children, tag, className }) => {
	switch (tag) {
		case 'h1':
			return <h1 className={cn(styles.h1, className)}>{children}</h1>;
		case 'h2':
			return <h2 className={cn(styles.h2, className)}>{children}</h2>;
		case 'h3':
			return <h3 className={cn(styles.h3, className)}>{children}</h3>;
		default:
			return <>{children}</>;
	}
};

export default H;
