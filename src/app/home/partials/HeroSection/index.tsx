import Button from '@/components/button';
import Container from '@/components/container';
import Text from '@/components/text';
import { constants } from '@/constants';
import { Routes } from '@/enums/routes';
import Image from 'next/image';
import styles from './styles.module.css';

type Props = {};

const HeroSection = (props: Props) => {
	return (
		<section className={styles['hero']}>
			<Container>
				<div className={styles['hero-content']}>
					<Text variant="h1" content="home_hero_heading" />
					<Text variant="p" content="home_hero_description" />
					<Button element="anchor" href={Routes.SHOP} variant="primary" contents={{ label: 'shop_all' }} />

					<ul className={styles['hero-gallery']}>
						<li>
							<Image
								src={'https://images.unsplash.com/photo-1499972823984-af6ee544403f?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
								alt="Clothing models"
								placeholder="blur"
								blurDataURL={constants.blurPlaceholder}
								fill
							/>
							<Button element="anchor" href={`${Routes.SHOP}/1`} variant="secondary" contents={{ label: 'buy_now' }} />
						</li>
						<li>
							<Image
								src={'https://images.unsplash.com/photo-1499971856191-1a420a42b498?q=80&w=2481&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
								alt="Clothing models"
								placeholder="blur"
								blurDataURL={constants.blurPlaceholder}
								fill
							/>
							<Button element="anchor" href={`${Routes.SHOP}/1`} variant="secondary" contents={{ label: 'buy_now' }} />
						</li>
						<li>
							<Image
								src={'https://images.unsplash.com/photo-1499971442178-8c10fdf5f6ac?q=80&w=2491&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
								alt="Clothing models"
								placeholder="blur"
								blurDataURL={constants.blurPlaceholder}
								fill
							/>
							<Button element="anchor" href={`${Routes.SHOP}/1`} variant="secondary" contents={{ label: 'buy_now' }} />
						</li>
					</ul>
				</div>
			</Container>
		</section>
	);
};

export default HeroSection;
