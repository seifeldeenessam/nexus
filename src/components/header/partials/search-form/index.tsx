import Button from '@/components/button';
import { getText } from '@/utilities/texts';
import { Backspace, MagnifyingGlass } from '@phosphor-icons/react/dist/ssr';
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './styles.module.css';

type Props = {};

const SearchForm = (props: Props) => {
	const [keyword, setKeyword] = useState<string>('');

	const handleKeyword = (e: ChangeEvent<HTMLInputElement>) => {
		setKeyword(e.target.value);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!keyword) return;

		alert(keyword);
	};

	const handleReset = () => {
		setKeyword('');
	};

	return (
		<form className={styles['search-form']} onSubmit={handleSubmit}>
			<Button element="button" type="submit" variant="default" contents={{ startIcon: <MagnifyingGlass size={16} /> }} />
			<input type="text" name="keyword" value={keyword} placeholder={getText('search')} onChange={handleKeyword} />
			<Button element="button" type="button" onClick={handleReset} variant="default" contents={{ startIcon: <Backspace size={16} /> }} />
		</form>
	);
};

export default SearchForm;
