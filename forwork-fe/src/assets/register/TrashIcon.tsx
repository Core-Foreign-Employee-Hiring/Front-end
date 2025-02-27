import * as React from "react";
import type { SVGProps } from "react";
const TrashIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        fill="none"
        {...props}
    >
        <path
            fill="#6F717C"
            fillRule="evenodd"
            d="M8.75.348a1 1 0 0 0 0 2.002h8a1 1 0 0 0 0-2.002zm-8 3.63a1 1 0 0 1 1-1.002h22a1 1 0 0 1 0 2.002h-19V17.34a5.003 5.003 0 0 0 5 5.005h6c2.761 0 5-2.24 5-5.005V7.148a1 1 0 1 1 2 0V17.34a7.004 7.004 0 0 1-7 7.008h-6c-3.866 0-7-3.138-7-7.008V4.978h-1a1 1 0 0 1-1-1m10 4.755a1 1 0 1 0-2 0v8.557a1 1 0 1 0 2 0zm5-1a1 1 0 0 1 1 1v8.557a1 1 0 1 1-2 0V8.733a1 1 0 0 1 1-1"
            clipRule="evenodd"
        />
    </svg>
);
export default TrashIcon;
