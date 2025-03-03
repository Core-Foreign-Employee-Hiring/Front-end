import * as React from "react";
import type { SVGProps } from "react";

const SmailIcon = ({ width = 33, height = 33, ...props }: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 33 33" // 원본 비율 유지
        fill="none"
        {...props}
    >
        <path
            stroke="#5451EC"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={1.6}
            d="M21.656 27.129a11.34 11.34 0 0 1-5.156 1.215c-6.344 0-11.5-5.156-11.5-11.5s5.156-11.5 11.5-11.5S28 10.5 28 16.844a11.7 11.7 0 0 1-.62 3.78"
        />
        <path
            fill="#5451EC"
            d="M12.335 15.46a1.308 1.308 0 1 0 0-2.616 1.308 1.308 0 0 0 0 2.616M20.703 15.46a1.308 1.308 0 1 0 0-2.616 1.308 1.308 0 0 0 0 2.616M19.584 19.63c-.491.9-1.745 1.527-3.107 1.527s-2.535-.573-3.052-1.472c-.164-.272-.518-.381-.79-.218a.61.61 0 0 0-.219.79c.709 1.227 2.317 2.044 4.06 2.044 1.745 0 3.407-.844 4.116-2.125.163-.273.054-.627-.218-.79-.273-.164-.627-.055-.79.217z"
        />
    </svg>
);

export default SmailIcon;
