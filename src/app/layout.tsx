import Announcements from '@/components/announcements';
import Footer from '@/components/footer';
import Header from '@/components/header';
import '@styles/globals.css';
import type { Metadata } from 'next';
import { Public_Sans } from 'next/font/google';
import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

const PublicSans = Public_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Nexus',
	description: 'Online Clothing Brand',
	metadataBase: new URL('http://localhost:3000/'),
	keywords: ['Nexus', 'clothing'],
	robots: { index: true, follow: true },
	icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
	manifest: '/manifest.json',
	openGraph: {
		title: 'Nexus',
		description: 'Online Clothing Brand',
		images: [{ url: '/icon-512.png' }],
		url: 'https://www.nexus.shop/',
		type: 'website'
	}
};

const RootLayout = ({ children }: Props) => {
	return (
		<html lang="en">
			<body className={PublicSans.className}>
				<Announcements />
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
