import * as React from "react";
import type { SVGProps } from "react";
const OptionIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <circle cx={12} cy={6.665} r={1.333} fill="#C5C6CD" />
        <circle cx={12} cy={12.001} r={1.333} fill="#C5C6CD" />
        <circle cx={12} cy={17.333} r={1.333} fill="#C5C6CD" />
    </svg>
);
export default OptionIcon;
