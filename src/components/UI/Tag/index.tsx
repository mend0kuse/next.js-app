import cn from 'classnames';

import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import styles from './Tag.module.scss';

interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	size?: 's' | 'm';
	children: React.ReactNode;
	color: 'red' | 'ghost' | 'green' | 'grey' | 'primary';
	href?: string;
}

const Tag: FC<TagProps> = ({ size = 's', children, color, href, ...props }) => {
	return (
		<div className={cn(styles.tag, styles[size], styles[color], { [styles.pointer]: href })} {...props}>
			{href ? <a href={href}>{children}</a> : <>{children}</>}
		</div>
	);
};

export default Tag;
