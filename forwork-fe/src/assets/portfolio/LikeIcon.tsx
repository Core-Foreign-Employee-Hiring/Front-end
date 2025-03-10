import * as React from "react";
import type { SVGProps } from "react";
const LikeIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={15}
        fill="none"
        {...props}
    >
        <path
            fill="#5551F5"
            stroke="#5551F5"
            strokeWidth={1.6}
            d="m14.437 7.464-.007.005-.056.08c-.153.217-.343.405-.599.629l-.012.01-.012.012-5.765 5.47-6.13-5.8C1.21 7.15.8 6.161.8 5.042c0-2.277 1.695-4.015 3.66-4.015 1.159 0 2.198.6 2.886 1.578l.654.93.654-.93c.688-.978 1.727-1.578 2.886-1.578 1.965 0 3.66 1.738 3.66 4.015 0 .91-.288 1.739-.763 2.422Z"
        />
    </svg>
);
export default LikeIcon;
