import * as React from "react";
import type { SVGProps } from "react";

interface Star2IconProps extends SVGProps<SVGSVGElement> {
    size?: number;
}

const Star2Icon = ({ size = 17, ...props }: Star2IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size * (11 / 17)}
        height={size}
        viewBox="0 0 11 17"
        fill="none"
        {...props}
    >
        <path
            fill="#5551F5"
            d="M5.25 16.501h-.073a.534.534 0 0 1-.462-.528c-.013-3.72-1.853-6.763-4.2-6.93a.534.534 0 0 1-.495-.535c0-.28.214-.515.495-.535 2.34-.174 4.187-3.218 4.2-6.93 0-.267.2-.495.462-.528.04 0 .087-.007.134 0a.53.53 0 0 1 .474.528c0 2.388.783 4.575 2.067 5.866a.537.537 0 0 1 0 .756.537.537 0 0 1-.756 0c-.809-.81-1.444-1.913-1.852-3.177-.596 1.833-1.653 3.278-2.95 4.02 1.297.742 2.354 2.194 2.95 4.027.842-2.582 2.595-4.408 4.655-4.562a.53.53 0 0 1 .575.495c.02.294-.2.548-.495.575-2.307.167-4.187 3.278-4.2 6.93a.53.53 0 0 1-.475.528h-.06z"
        />
    </svg>
);

export default Star2Icon;
