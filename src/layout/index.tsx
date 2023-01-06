import React, { FC } from 'react';

import Footer from './footer';
import Header from './header';
import styles from './layout.module.scss';
import Sidebar from './sidebar';

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<div className={styles.body}>{children}</div>
			<Footer className={styles.footer} />
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown>>(Component: FC<T>) => {
	return function withLayoutComponent(props: T) {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};
