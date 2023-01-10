import cn from 'classnames';

import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import Logo from '../logo';
import Menu from '../menu';
import styles from './sidebar.module.scss';

interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

const Sidebar: FC<SidebarProps> = ({ className, ...props }) => {
	return (
		<div className={cn(className, styles.sidebar)} {...props}>
			<Logo />
			<p>search</p>
			<Menu />
		</div>
	);
};

export default Sidebar;
