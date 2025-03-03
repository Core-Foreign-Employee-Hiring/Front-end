import * as React from "react";
import type { SVGProps } from "react";

const FullLikeIcon = ({ width = 23, height = 20, ...props }: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 23 20" // 원본 비율 유지
        fill="none"
        {...props}
    >
        <path
            fill="#5551F5"
            d="m21.695 10.605-.093.075c-.298.39-.652.708-1.044 1.025l-9.077 7.977-9.636-8.443A6.4 6.4 0 0 1 0 6.729 6.41 6.41 0 0 1 6.412.315c2.087 0 3.914 1.007 5.088 2.554 1.174-1.547 3-2.554 5.088-2.554A6.41 6.41 0 0 1 23 6.728c0 1.454-.503 2.777-1.323 3.858z"
        />
    </svg>
);

export default FullLikeIcon;
