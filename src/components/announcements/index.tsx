import Button from '@/components/button';
import Container from '@/components/container';
import Text from '@/components/text';
import { Routes } from '@/enums/routes';
import { Globe } from '@phosphor-icons/react/dist/ssr';
import styles from './styles.module.css';

type Props = {};

const Announcements = (props: Props) => {
	return (
		<div className={styles['announcements']}>
			<Container>
				<div className={styles['announcements-content']}>
					<div className={styles['region-options']}>
						<Button element="button" variant="default" contents={{ startIcon: <Globe size={16} /> }} />
						<hr />
						<Button element="button" variant="default" contents={{ label: 'country_egypt' }} />
					</div>
					<Text variant="small" content="static_announcement" />
					<Button element="anchor" href={Routes.SUPPORT} variant="default" contents={{ label: 'support' }} />
				</div>
			</Container>
		</div>
	);
};

export default Announcements;
