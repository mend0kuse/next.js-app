import cn from 'classnames';
import { AppContext } from 'src/context';

import React, { DetailedHTMLProps, FC, HTMLAttributes, useContext } from 'react';

import styles from './menu.module.scss';

interface MenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

const Menu: FC<MenuProps> = ({ ...props }) => {
	const { menu } = useContext(AppContext);
	return (
		<ul>
			{menu.map((item) => {
				return <li key={item._id.secondCategory}>{item._id.secondCategory}</li>;
			})}
		</ul>
	);
};

export default Menu;
