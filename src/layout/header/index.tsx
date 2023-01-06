import cn from 'classnames';

import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import styles from './header.module.scss';

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Header: FC<HeaderProps> = ({ ...props }) => {
	return <div {...props}>Header</div>;
};

export default Header;
