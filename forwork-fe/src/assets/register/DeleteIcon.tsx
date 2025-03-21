import * as React from "react";
import type { SVGProps } from "react";
const DeleteIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={17}
        height={16}
        fill="none"
        {...props}
    >
        <path
            fill="#6F717C"
            fillRule="evenodd"
            d="M5.709 0a.667.667 0 0 0 0 1.335h5.333a.667.667 0 0 0 0-1.335zM.375 2.421c0-.368.298-.667.667-.667h14.666a.667.667 0 0 1 0 1.335H3.041v8.239a3.335 3.335 0 0 0 3.334 3.337h4a3.335 3.335 0 0 0 3.333-3.337V4.533a.667.667 0 1 1 1.333 0v6.795A4.67 4.67 0 0 1 10.375 16h-4a4.67 4.67 0 0 1-4.667-4.672v-8.24h-.666a.667.667 0 0 1-.667-.667m6.667 3.172a.667.667 0 1 0-1.333 0v5.704a.667.667 0 1 0 1.333 0zm3.333-.667c.368 0 .667.299.667.667v5.704a.667.667 0 1 1-1.333 0V5.594c0-.368.298-.667.666-.667"
            clipRule="evenodd"
        />
    </svg>
);
export default DeleteIcon;
