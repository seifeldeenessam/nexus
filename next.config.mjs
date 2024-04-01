/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }]
	},
	webpack: (config) => {
		config.module.rules.push({ test: /\.svg$/i, issuer: /\.[jt]sx?$/, use: ['@svgr/webpack'] });
		return config;
	},
	redirects: async () => {
		return [{ source: '/', destination: '/home', permanent: true }];
	}
};

export default nextConfig;
