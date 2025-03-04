import * as React from "react";
import type { SVGProps } from "react";

interface ViewIconProps extends SVGProps<SVGSVGElement> {
    size?: number | string; // ✅ 크기 조정용 단일 속성 추가
    fill?: string;
}

const ViewIcon = ({
                      size = 14,  // 기본값 설정
                      fill = "#999BA5",
                      ...props
                  }: ViewIconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}   // ✅ 크기를 하나의 속성(size)로 조정
            height={size}  // ✅ 정사각형 비율 유지
            viewBox="0 0 14 10"
            preserveAspectRatio="xMidYMid meet" // ✅ 원본 비율 유지
            {...props}
        >
            <path
                fill={fill}
                d="M7 2.044c2.326 0 4.4 1.278 5.412 3.3-1.012 2.022-3.08 3.3-5.412 3.3s-4.4-1.278-5.412-3.3C2.6 3.322 4.674 2.044 7 2.044m0-1.2c-3.068 0-5.688 1.866-6.75 4.5 1.062 2.634 3.682 4.5 6.75 4.5s5.688-1.866 6.75-4.5C12.688 2.71 10.068.844 7 .844m0 3c.847 0 1.534.672 1.534 1.5s-.687 1.5-1.534 1.5-1.534-.672-1.534-1.5.687-1.5 1.534-1.5m0-1.2c-1.522 0-2.761 1.212-2.761 2.7s1.24 2.7 2.761 2.7 2.761-1.212 2.761-2.7-1.24-2.7-2.761-2.7"
            />
        </svg>
    );
};

export default ViewIcon;
