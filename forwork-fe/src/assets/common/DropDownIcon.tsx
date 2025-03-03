import * as React from "react";
import type { SVGProps } from "react";
const DropDownIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={8}
        height={5}
        fill="none"
        {...props}
    >
        <path
            fill="#6F717C"
            d="M3.605 3.952.644.99A.4.4 0 0 1 .552.857a.364.364 0 0 1 .344-.51h6.209q.168 0 .272.113a.38.38 0 0 1 .103.263q0 .02-.123.266l-2.96 2.963a.555.555 0 0 1-.792 0"
        />
    </svg>
);
export default DropDownIcon;
