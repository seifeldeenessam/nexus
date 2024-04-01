'use client';

import Button from '@/components/button';
import { getText } from '@/utilities/texts';
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './styles.module.css';

type Props = {};

const NewsletterForm = (props: Props) => {
	const [email, setEmail] = useState<string>('');

	const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!email) return;

		alert(email);
		setEmail('');
	};

	return (
		<form className={styles['newsletter-form']} onSubmit={handleSubmit}>
			<input type="email" name="email" value={email} placeholder={getText('email')} onChange={handleEmail} />
			<Button element="button" type="submit" variant="default" contents={{ label: 'sign_up' }} />
		</form>
	);
};

export default NewsletterForm;
