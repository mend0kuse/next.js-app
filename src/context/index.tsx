import { MenuItem } from 'src/interfaces/menu';
import { TopLevelCategory } from 'src/interfaces/page';

import { FC, PropsWithChildren, createContext, useState } from 'react';

export interface IAppContext {
	menu: MenuItem[];
	firstCategory: TopLevelCategory;
	setMenu?: (newMenu: MenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({ menu: [], firstCategory: TopLevelCategory.Courses });

export const AppContextProvider: FC<PropsWithChildren<IAppContext>> = ({ children, ...props }) => {
	const [menu, setMenu] = useState<MenuItem[]>(props.menu);
	return (
		<AppContext.Provider value={{ menu, firstCategory: props.firstCategory, setMenu }}>
			{children}
		</AppContext.Provider>
	);
};
