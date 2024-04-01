import Button from '../button';
import Container from '../container';
import Text from '../text';
import NewsletterForm from './partials/newsletter-form';
import { aboutItems, helpItems, shopItems } from './static';
import styles from './styles.module.css';

type Props = {};

const Footer = (props: Props) => {
	const renderShopItems = () => {
		return shopItems.map((item) => (
			<li key={item.id}>
				<Button element="anchor" href={item.path} variant="default" contents={{ label: item.label }} />
			</li>
		));
	};

	const renderHelpItems = () => {
		return helpItems.map((item) => (
			<li key={item.id}>
				<Button element="anchor" href={item.path} variant="default" contents={{ label: item.label }} />
			</li>
		));
	};

	const renderAboutItems = () => {
		return aboutItems.map((item) => (
			<li key={item.id}>
				<Button element="anchor" href={item.path} variant="default" contents={{ label: item.label }} />
			</li>
		));
	};

	return (
		<footer className={styles['footer']}>
			<Container>
				<ul className={styles['footer-content']}>
					<li>
						<Text variant="h4" content="newsletter_title" />
						<Text variant="small" content="newsletter_description" />
						<NewsletterForm />
					</li>
					<li>
						<Text variant="p" content="shop" />
						<ul>{renderShopItems()}</ul>
					</li>
					<li>
						<Text variant="p" content="help" />
						<ul>{renderHelpItems()}</ul>
					</li>
					<li>
						<Text variant="p" content="about" />
						<ul>{renderAboutItems()}</ul>
					</li>
				</ul>
			</Container>
		</footer>
	);
};

export default Footer;
