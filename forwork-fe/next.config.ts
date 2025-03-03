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
};

export default nextConfig;
