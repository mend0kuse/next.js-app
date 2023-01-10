import BooksIcon from 'src/icons/books';
import CoursesIcon from 'src/icons/courses';
import ProductsIcon from 'src/icons/products';
import ServicesIcon from 'src/icons/services';
import { FirstLevelMenuItem } from 'src/interfaces/menu';
import { TopLevelCategory } from 'src/interfaces/page';

export const firstLvlMenu: FirstLevelMenuItem[] = [
	{ route: '/courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
	{ route: '/services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
	{ route: '/products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products },
	{ route: '/books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
];
