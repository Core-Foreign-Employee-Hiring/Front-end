import * as React from "react";
import type { SVGProps } from "react";
const DayIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={21}
        fill="none"
        {...props}
    >
        <mask
            id="a"
            width={21}
            height={21}
            x={0}
            y={0}
            maskUnits="userSpaceOnUse"
            style={{
                maskType: "alpha",
            }}
        >
            <path fill="#D9D9D9" d="M.82.5h20v20h-20z" />
        </mask>
        <g mask="url(#a)">
            <path
                fill="#6F717C"
                d="M16.265 4.556h-.778V3h-1.556v1.556H7.71V3H6.154v1.556h-.778c-.863 0-1.548.7-1.548 1.555L3.82 17c0 .856.693 1.556 1.556 1.556h10.889c.855 0 1.555-.7 1.555-1.556V6.111c0-.855-.7-1.555-1.555-1.555m0 12.444H5.375V9.222h10.89zm-7.778-4.667H6.931v-1.555h1.556zm3.111 0h-1.556v-1.555h1.556zm3.111 0h-1.555v-1.555h1.555zm-6.222 3.111H6.931V13.89h1.556zm3.111 0h-1.556V13.89h1.556zm3.111 0h-1.555V13.89h1.555z"
            />
        </g>
    </svg>
);
export default DayIcon;
