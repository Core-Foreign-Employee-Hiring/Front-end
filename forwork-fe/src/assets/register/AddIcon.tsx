import * as React from "react";
import type { SVGProps } from "react";
const AddIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={12}
        fill="none"
        {...props}
    >
        <path
            fill="#5551F5"
            d="M5.126 6.973H.959a.6.6 0 0 1-.445-.18.6.6 0 0 1-.18-.445q0-.266.18-.445.18-.18.445-.18h4.167V1.557q0-.266.18-.446t.445-.18.445.18.18.446v4.166h4.166q.266 0 .446.18t.18.446-.18.445a.6.6 0 0 1-.446.18H6.376v4.166q0 .265-.18.445a.6.6 0 0 1-.446.18.6.6 0 0 1-.445-.18.6.6 0 0 1-.18-.445z"
        />
    </svg>
);
export default AddIcon;
