import Texts from '@assets/jsons/texts.json';

export const getText = (key: string): string => {
	try {
		const text: string | undefined = JSON.parse(JSON.stringify(Texts))[key];
		return text || `Cannot find text: "${key}"`;
	} catch (error) {
		return 'Error using translation';
	}
};
