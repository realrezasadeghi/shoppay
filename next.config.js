/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                port: '',
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
            }
        ]
    }
};

module.exports = nextConfig;
