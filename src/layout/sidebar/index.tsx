import cn from 'classnames';

import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import styles from './sidebar.module.scss';

interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Sidebar: FC<SidebarProps> = ({ ...props }) => {
	return <div {...props}>Sidebar</div>;
};

export default Sidebar;
