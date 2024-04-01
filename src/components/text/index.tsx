import { getText } from '@/utilities/texts';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small';

type Props = {
	variant: Variant;
	content: string;
	className?: string;
};

const Text = ({ variant, content, className }: Props) => {
	if (variant === 'h1') return <h1 className={className}>{getText(content)}</h1>;
	if (variant === 'h2') return <h2 className={className}>{getText(content)}</h2>;
	if (variant === 'h3') return <h3 className={className}>{getText(content)}</h3>;
	if (variant === 'h4') return <h4 className={className}>{getText(content)}</h4>;
	if (variant === 'h5') return <h5 className={className}>{getText(content)}</h5>;
	if (variant === 'h6') return <h6 className={className}>{getText(content)}</h6>;
	if (variant === 'p') return <p className={className}>{getText(content)}</p>;
	if (variant === 'small') return <small className={className}>{getText(content)}</small>;

	return <></>;
};

export default Text;
