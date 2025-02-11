import * as React from "react";
import type { SVGProps } from "react";
const CalendarIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={39}
        height={40}
        fill="none"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                fill="#000"
                d="M30.875 7H29.25V3.75H26V7H13V3.75H9.75V7H8.125a3.235 3.235 0 0 0-3.234 3.25L4.875 33a3.25 3.25 0 0 0 3.25 3.25h22.75a3.26 3.26 0 0 0 3.25-3.25V10.25A3.26 3.26 0 0 0 30.875 7m0 26H8.125V16.75h22.75zm-16.25-9.75h-3.25V20h3.25zm6.5 0h-3.25V20h3.25zm6.5 0h-3.25V20h3.25zm-13 6.5h-3.25V26.5h3.25zm6.5 0h-3.25V26.5h3.25zm6.5 0h-3.25V26.5h3.25z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 .5h39v39H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default CalendarIcon;
