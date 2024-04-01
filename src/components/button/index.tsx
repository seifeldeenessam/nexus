import { getText } from '@/utilities/texts';
import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';
import { Fragment } from 'react';
import styles from './styles.module.css';

type Variant = 'default' | 'primary' | 'secondary';
type ButtonProps = { element: 'button' } & ComponentProps<'button'>;
type AnchorProps = { element: 'anchor' } & ComponentProps<'a'>;
type SharedProps = { variant: Variant; contents: { label?: string; startIcon?: ReactNode; endIcon?: ReactNode; static?: boolean } };

type Props = (ButtonProps | AnchorProps) & SharedProps;

const Button = (props: Props) => {
	const getClassNames = () => {
		return [styles['button'], styles[`button-${props.variant}`]].join(' ');
	};

	const Contents = () => {
		return (
			<Fragment>
				{props.contents.startIcon && props.contents.startIcon}
				{props.contents.label ? (props.contents.static ? props.contents.label : getText(props.contents.label)) : undefined}
				{props.contents.endIcon && props.contents.endIcon}
			</Fragment>
		);
	};

	if (props.element === 'button') {
		return (
			<button className={getClassNames()} {...props}>
				<Contents />
			</button>
		);
	} else if (props.element === 'anchor') {
		return (
			<Link href={props.href || '#'} className={getClassNames()} {...props}>
				<Contents />
			</Link>
		);
	} else {
		return null;
	}
};

export default Button;
