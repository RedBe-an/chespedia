import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async rewrites() {
        // dev only, this allows for local api calls to be proxied to
        // api routes that use rust runtime
        if (process.env.NODE_ENV === 'development') {
            return [
                {
                    source: '/api/:path*',
                    destination: 'http://0.0.0.0:3001/api/:path*'
                }
            ];
        }
        // apply any of your existing rewrites here
        return [];
    }
};

export default nextConfig;
