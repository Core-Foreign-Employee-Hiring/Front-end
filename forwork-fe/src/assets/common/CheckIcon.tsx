import * as React from "react";
import type { SVGProps } from "react";
const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <rect width={24} height={24} fill="#5551F5" rx={12} />
        <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.6}
            d="m6 11 4.5 4.5L18 8"
        />
    </svg>
);
export default CheckIcon;
