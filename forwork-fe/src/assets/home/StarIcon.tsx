import * as React from "react";
import type { SVGProps } from "react";
const StarIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={22}
        height={29}
        fill="none"
        {...props}
    >
        <path
            fill="#5551F5"
            d="m11 .72.482 1.959A17.52 17.52 0 0 0 21.898 14.72a17.52 17.52 0 0 0-10.414 12.042L11 28.72l-.482-1.959A17.52 17.52 0 0 0 .103 14.721 17.52 17.52 0 0 0 10.518 2.679z"
        />
    </svg>
);
export default StarIcon;
