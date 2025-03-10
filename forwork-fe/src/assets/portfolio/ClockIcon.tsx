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
        <path
            fill="#5551F5"
            d="M10 .5C4.483.5 0 4.983 0 10.5s4.483 10 10 10 10-4.483 10-10-4.483-10-10-10m5.197 15.182a.82.82 0 0 1-.554.233.74.74 0 0 1-.553-.233l-4.89-4.89V4.036c0-.437.349-.786.785-.786s.787.35.787.786v6.114l4.44 4.44c.305.305.305.8 0 1.106z"
        />
    </svg>
);
export default ClockIcon;
