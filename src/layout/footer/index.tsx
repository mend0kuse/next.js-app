import cn from 'classnames';
import { format } from 'date-fns';

import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import P from '@components/UI/PTag';

import styles from './footer.module.scss';

interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Footer: FC<FooterProps> = ({ className, ...props }) => {
	return (
		<footer {...props} className={cn(styles.footer, className)}>
			<div className={styles.container}>
				<P size='x'>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</P>
				<P size='x'>Пользовательское соглашение</P>
				<P size='x'>Политика конфиденциальности</P>
			</div>
		</footer>
	);
};

export default Footer;
