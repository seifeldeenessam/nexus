import { Routes } from '@/enums/routes';

export const shopItems = [
	{ id: 1, label: "women's", path: `${Routes.SHOP}?category=women's` },
	{ id: 2, label: "men's", path: `${Routes.SHOP}?category=men's` },
	{ id: 3, label: "kid's", path: `${Routes.SHOP}?category=kid's` },
	{ id: 4, label: 'shoes', path: `${Routes.SHOP}?category=shoes` },
	{ id: 5, label: 'sale', path: `${Routes.SHOP}?category=sale` }
];

export const helpItems = [
	{ id: 1, label: 'help_center', path: '#' },
	{ id: 2, label: 'order_status', path: '#' },
	{ id: 3, label: 'size_chart', path: '#' },
	{ id: 4, label: 'returns_&_warranty', path: '#' },
	{ id: 5, label: 'contact_us', path: '#' }
];

export const aboutItems = [
	{ id: 1, label: 'about_us', path: Routes.ABOUT },
	{ id: 2, label: 'responsibility', path: '#' },
	{ id: 3, label: 'technology_&_innovation', path: '#' },
	{ id: 4, label: 'explore_our_stores', path: '#' }
];
