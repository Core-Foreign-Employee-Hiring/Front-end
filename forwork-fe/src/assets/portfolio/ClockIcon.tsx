import * as React from "react";
import type { SVGProps } from "react";
const ClockIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={21}
        fill="none"
        {...props}
    >
        <g
            stroke="#5551F5"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={1.2}
            clipPath="url(#a)"
        >
            <path d="M13.402 18.225a8.5 8.5 0 0 1-3.402.712c-4.655 0-8.437-3.782-8.437-8.437S5.345 2.063 10 2.063s8.438 3.782 8.438 8.437c0 1.093-.21 2.15-.59 3.107" />
            <path d="M9.999 5.242v5.485l3.093 3.98" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M.909.828h18.183V20.17H.909z" />
            </clipPath>
        </defs>
    </svg>
);
export default ClockIcon;
