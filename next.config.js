/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                port: '',
                protocol: 'https',
                pathname: '/',
                hostname: 'avatars.githubusercontent.com'
            },
            {
                port: '',
                protocol: 'https',
                pathname: '/',
                hostname: 'ae01.alicdn.com'
            },
            {
                port: '',
                protocol: 'https',
                pathname: '/**',
                hostname: 'img.ltwebstatic.com'
            }
        ],
    },
};

module.exports = nextConfig;
