import * as React from "react";
import type { SVGProps } from "react";
const LikeIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={15}
        fill="none"
        {...props}
    >
        <path
            stroke="#5551F5"
            strokeWidth={1.2}
            d="m15.398 8.329-6.413 5.635-6.813-5.97A4.2 4.2 0 0 1 .975 5.047 4.21 4.21 0 0 1 5.184.838c1.365 0 2.563.657 3.338 1.678l.478.63.478-.63C10.253 1.495 11.45.838 12.816.838a4.21 4.21 0 0 1 4.209 4.209c0 .948-.327 1.815-.87 2.531l-.004.005-.007.005-.045.059c-.18.236-.401.438-.683.666l-.01.008z"
        />
    </svg>
);
export default LikeIcon;
