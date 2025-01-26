import * as React from "react";
import type { SVGProps } from "react";
const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={19}
        height={19}
        fill="none"
        {...props}
    >
        <path
            fill="#1C1B1F"
            d="m17.316 18.672-6.3-6.3q-.75.6-1.725.95t-2.075.35q-2.725 0-4.613-1.888Q.716 9.897.716 7.172t1.887-4.613T7.216.672t4.612 1.887 1.888 4.613a6.1 6.1 0 0 1-1.3 3.8l6.3 6.3zm-10.1-7q1.875 0 3.187-1.313 1.313-1.312 1.313-3.187t-1.313-3.188-3.187-1.312-3.188 1.312-1.312 3.188 1.312 3.187 3.188 1.313"
        />
    </svg>
);
export default SearchIcon;
