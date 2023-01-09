import cn from 'classnames';

import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import Menu from '../menu';
import styles from './sidebar.module.scss';

interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

const Sidebar: FC<SidebarProps> = ({ ...props }) => {
	return (
		<div {...props}>
			<Menu />
		</div>
	);
};

export default Sidebar;
