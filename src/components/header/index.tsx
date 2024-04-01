'use client';

import { Routes } from '@/enums/routes';
import LogoSVG from '@assets/svgs/logo.svg';
import { HandbagSimple } from '@phosphor-icons/react/dist/ssr';
import Button from '../button';
import Container from '../container';
import SearchForm from './partials/search-form';
import { navItems } from './static';
import styles from './styles.module.css';

type Props = {};

const Header = (props: Props) => {
	const renderNavItems = () => {
		return navItems.map((item) => (
			<li key={item.id}>
				<Button element="anchor" href={item.href} variant="default" contents={{ label: item.label }} />
			</li>
		));
	};

	return (
		<header className={styles['header']}>
			<Container>
				<div className={styles['header-content']}>
					<Button element="anchor" href={Routes.HOME} variant="default" contents={{ startIcon: <LogoSVG /> }} />
					<nav>
						<ul>{renderNavItems()}</ul>
						<SearchForm />
					</nav>
					<div>
						<Button element="anchor" href={Routes.CART} variant="default" contents={{ startIcon: <HandbagSimple size={16} />, label: '3', static: true }} />
						<Button element="anchor" href={Routes.LOGIN} variant="default" contents={{ label: 'login' }} />
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
