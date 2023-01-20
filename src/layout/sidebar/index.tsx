import cn from 'classnames';

import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import SearchField from '@components/search';

import Logo from '../../icons/Logo';
import Menu from '../menu';
import styles from './sidebar.module.scss';

interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

const Sidebar: FC<SidebarProps> = ({ className, ...props }) => {
	return (
		<div className={cn(styles.sidebar, className)} {...props}>
			<Logo />
			<SearchField />
			<Menu />
		</div>
	);
};

export default Sidebar;
