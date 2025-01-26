import * as React from "react";
import type { SVGProps } from "react";
interface BackIconProps extends SVGProps<SVGSVGElement> {
    direction?: "left" | "right" | "up" | "down"; // 방향 추가
    size?: number; // 크기 (비율을 유지하기 위해 width와 height를 동시에 설정)
    color?: string; // 경로의 색상
    strokeWidth?: number; // 선 두께
}
const ArrowForwardIcon = ({
                              direction = "left",
                              size = 12, // 기본 크기
                              color = "#6F717C", // 기본값
                              strokeWidth = 1,
                              ...props

                          }: BackIconProps) => {
    // 방향에 따라 회전값 설정
    const rotation =
        direction === "right"
            ? "rotate(180)"
            : direction === "up"
                ? "rotate(-90)"
                : direction === "down"
                    ? "rotate(90)"
                    : "rotate(0)"; // 기본은 left 방향
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size * (20 / 11)}
            viewBox="0 0 11 20" // 원본 크기 설정
            fill="none"
            transform={rotation} // 방향에 따라 회전 적용
            {...props}
        >
            <path
                stroke={color} strokeWidth={strokeWidth}
                fill={color}
                d="M6.852 7.86.825 1.833a.78.78 0 0 1-.232-.56.75.75 0 0 1 .224-.56.76.76 0 0 1 .56-.228q.332 0 .56.228L8.15 6.918q.206.205.293.444.09.24.089.498 0 .26-.089.499-.087.239-.293.444l-6.205 6.205a.78.78 0 0 1-.564.231.75.75 0 0 1-.564-.223.76.76 0 0 1-.228-.56q0-.333.228-.56z"
            />
        </svg>
    )
};
export default ArrowForwardIcon;
