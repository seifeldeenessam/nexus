import { ReactNode } from 'react';
import styles from './styles.module.css';

type Props = {
	children: ReactNode;
};

const Container = ({ children }: Props) => {
	return <div className={styles['container']}>{children}</div>;
};

export default Container;
