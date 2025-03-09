import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ["coreforwork.s3.ap-northeast-2.amazonaws.com"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "coreforwork.s3.ap-northeast-2.amazonaws.com",
            },
        ],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: /\.[jt]sx?$/, // JSX/TSX 파일에서만 사용 가능
            use: ["@svgr/webpack"],
        });
        return config;
    },
};

export default nextConfig;
