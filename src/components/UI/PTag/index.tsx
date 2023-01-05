import cn from 'classnames';

import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import styles from './PTag.module.scss';

interface PTagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	size?: 'm' | 'x' | 'xl';
	children: React.ReactNode;
}

const P: FC<PTagProps> = ({ size = 'm', children, ...props }) => {
	return (
		<p className={cn(styles.paragraph, styles[size])} {...props}>
			{children}
		</p>
	);
};

export default P;
