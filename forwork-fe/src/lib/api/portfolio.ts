import {sendRequest} from "@/src/lib/axios";
import Cookies from "js-cookie";

/**
 * 포트폴리오 일반 지원 찜하기
 * @param employeeId formData
 */
export const likePortfolioBasicPost = async (employeeId: string | string[] | undefined) => {
    try {
        const response = await sendRequest({
            headers: {
                Authorization: `Bearer ${Cookies.get("accessToken")}`,
                'Content-Type': 'multipart/form-data',
            },
            method: "POST",
            url: `/api/v1/portfolio/basics/${employeeId}`,
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("일반 포트폴리오 찜하기 에러:", error);
    }
};


/**
 * 포트폴리오 실제 지원 찜하기
 * @param resumeId formData
 */
export const likePortfolioApplyPost = async (resumeId: string | string[] | undefined) => {
    try {
        const response = await sendRequest({
            headers: {
                Authorization: `Bearer ${Cookies.get("accessToken")}`,
                'Content-Type': 'multipart/form-data',
            },
            method: "POST",
            url: `/api/v1/portfolio/applications/${resumeId}`,
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("실제 지원 포트폴리오 찜하기 에러:", error);
    }
};
