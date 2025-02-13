import {SVGProps} from "react";
import * as React from "react";

const UnCheckIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={10}
        fill="none"
        {...props}
    >
        <path
            stroke="#C5C6CD"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.6}
            d="m1 4 4.5 4.5L13 1"
        />
    </svg>
);
export default UnCheckIcon;
