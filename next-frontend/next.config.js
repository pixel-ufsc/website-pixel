/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['cdn.sanity.io'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    }, // TODO - Mudar para o dominio correto
};

module.exports = nextConfig;
