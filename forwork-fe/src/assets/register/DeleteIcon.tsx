import * as React from "react";
import type { SVGProps } from "react";
const DeleteIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={22}
        height={25}
        fill="none"
        {...props}
    >
        <path
            fill="#999BA5"
            d="M4.333 24.348a2.57 2.57 0 0 1-1.883-.784 2.57 2.57 0 0 1-.783-1.883V4.348H.333V1.68H7V.348h8V1.68h6.667v2.667h-1.334V21.68q0 1.1-.783 1.883a2.57 2.57 0 0 1-1.883.784zm13.334-20H4.333V21.68h13.334zM7 19.014h2.667v-12H7zm5.333 0H15v-12h-2.667z"
        />
    </svg>
);
export default DeleteIcon;
