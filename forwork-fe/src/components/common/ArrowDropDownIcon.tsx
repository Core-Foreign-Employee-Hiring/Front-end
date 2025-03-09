import * as React from "react";
import type { SVGProps } from "react";

interface ArrowDropDownIconProps extends SVGProps<SVGSVGElement> {
    direction?: "up" | "down" | "left" | "right";
}

const ArrowDropDownIcon = ({ direction = "down", ...props }: ArrowDropDownIconProps) => {
    const rotationMap = {
        down: "rotate(180deg)",
        up: "rotate(0deg)",
        left: "rotate(90deg)",
        right: "rotate(-90deg)",
    };

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={8}
            height={4}
            fill="none"
            style={{ transform: rotationMap[direction] }}
            {...props}
        >
            <path
                fill="#6F717C"
                d="M3.604.167.644 3.129a.4.4 0 0 0-.093.133.364.364 0 0 0 .345.509h6.208a.35.35 0 0 0 .272-.113.38.38 0 0 0 .103-.262q0-.021-.122-.266L4.396.167a.555.555 0 0 0-.792 0"
            />
        </svg>
    );
};

export default ArrowDropDownIcon;

