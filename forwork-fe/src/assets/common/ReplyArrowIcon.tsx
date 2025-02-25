import * as React from "react";
import type { SVGProps } from "react";
const ReplyArrowIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={12}
        fill="none"
        {...props}
    >
        <path
            fill="#C5C6CD"
            d="M8.717 7.714 7.354 6.351l1.217-1.208L12 8.57 8.571 12l-1.208-1.209L8.717 9.43H1.714A1.72 1.72 0 0 1 0 7.714V0h1.714v7.714z"
        />
    </svg>
);
export default ReplyArrowIcon;
