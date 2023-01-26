/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['courses-top.ru'],
	},
	reactStrictMode: true,
	eslint: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreDuringBuilds: true,
		dirs: ['src'],
	},
};

module.exports = nextConfig;
