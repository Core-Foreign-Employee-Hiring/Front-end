import * as React from "react";
import type { SVGProps } from "react";
const HeartIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={17}
        height={16}
        fill="none"
        {...props}
    >
        <path
            fill="#5551F5"
            stroke="#5551F5"
            strokeWidth={1.6}
            d="m14.999 7.964-.006.005-.057.08c-.152.217-.343.405-.598.629l-.013.01-.012.012-5.764 5.47-6.13-5.8c-.647-.719-1.056-1.709-1.056-2.828 0-2.277 1.695-4.015 3.66-4.015 1.158 0 2.198.6 2.885 1.578l.654.93.655-.93c.687-.978 1.727-1.578 2.885-1.578 1.965 0 3.66 1.738 3.66 4.015 0 .91-.288 1.739-.763 2.422Z"
        />
    </svg>
);
export default HeartIcon;
