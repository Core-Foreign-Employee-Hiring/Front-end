import * as React from "react";
import type { SVGProps } from "react";
const CancelIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={33}
        fill="none"
        {...props}
    >
        <mask
            id="a"
            width={32}
            height={33}
            x={0}
            y={0}
            maskUnits="userSpaceOnUse"
            style={{
                maskType: "alpha",
            }}
        >
            <path fill="#D9D9D9" d="M0 .152h32v32H0z" />
        </mask>
        <g mask="url(#a)">
            <path
                fill="#1C1B1F"
                d="m16 17.39-5.697 5.697q-.278.277-.597.267t-.609-.3-.29-.62q0-.328.29-.619l5.665-5.664-5.698-5.697q-.277-.277-.267-.613t.3-.626.62-.29.619.29L16 14.913l5.697-5.698q.278-.276.613-.283.336-.006.626.283.29.29.29.62t-.29.62l-5.698 5.696 5.698 5.698q.276.276.283.596t-.283.61-.62.289q-.328 0-.619-.29z"
            />
        </g>
    </svg>
);
export default CancelIcon;
