import cn from 'classnames';
import { AppContext } from 'src/context';
import { PageItem } from 'src/interfaces/menu';
import { firstLvlMenu } from 'src/utils/helpers';

import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { DetailedHTMLProps, FC, HTMLAttributes, useContext } from 'react';

import styles from './menu.module.scss';

interface MenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

const Menu: FC<MenuProps> = () => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);
	const router = useRouter();

	const toggleMenuBlock = (categoryId: string) => {
		setMenu &&
			setMenu(
				menu.map((i) => {
					if (categoryId === i._id.secondCategory) {
						i.isOpened = !i.isOpened;
					}
					return i;
				}),
			);
	};

	const buildSecondLvlMenu = (firstLvlRoute: string) => {
		return (
			<div className={styles.secondLvlWrapper}>
				{menu.map((m) => {
					if (m.pages.map((i) => i.alias).includes(router.asPath.split('/')[2])) {
						m.isOpened = true;
					}
					return (
						<div key={m._id.secondCategory}>
							<button
								onClick={() => {
									toggleMenuBlock(m._id.secondCategory);
								}}
								className={styles.secondLvl}
							>
								{m._id.secondCategory}
							</button>
							<div
								className={cn(styles.secondLvlBlock, {
									[styles.secondLvlBlockOPened]: m.isOpened,
								})}
							>
								{buildThirdLvlMenu(m.pages, firstLvlRoute)}
							</div>
						</div>
					);
				})}
			</div>
		);
	};

	const buildThirdLvlMenu = (pages: PageItem[], route: string) => {
		return pages.map((p) => (
			<Link
				key={p.alias}
				className={cn(styles.thirdLvl, {
					[styles.thirdLvlActive]: `${route}/${p.alias}` === router.asPath,
				})}
				href={`${route}/${p.alias}`}
			>
				{p.category}
			</Link>
		));
	};

	return (
		<div className={styles.wrapper}>
			{firstLvlMenu.map((menuItem) => (
				<div key={menuItem.id}>
					<>
						<Link
							className={cn(styles.firstLvl, {
								[styles.firstLvlActive]: menuItem.id === firstCategory,
							})}
							href={menuItem.route}
						>
							{menuItem.icon}
							<span>{menuItem.name}</span>
						</Link>
						{menuItem.id == firstCategory && buildSecondLvlMenu(menuItem.route)}
					</>
				</div>
			))}
		</div>
	);
};

export default Menu;
