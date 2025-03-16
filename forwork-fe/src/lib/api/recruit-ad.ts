import {sendRequest} from "@/src/lib/axios";
import Cookies from "js-cookie";
import {ApplyGeneralAdType} from "@/src/types/recruit-ad";

/**
 * 공고 찜하기
 * @param recruitId 공고 id
 */
export const likeRecruitAdPost = async (recruitId: number) => {
    try {
        const response = await sendRequest({
            headers: {
                Authorization: `Bearer ${Cookies.get("accessToken")}`,
                'Content-Type': 'multipart/form-data',
            },
            method: "PATCH",
            url: `/api/v1/recruit/${recruitId}/bookmark`,
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("공고 찜하기 에러:", error);
    }
};


/**
 * 일반 공고 지원하기
 * @param recruitId 공고 id
 * @param data
 */
export const applyGeneralAd = async (recruitId: number, data: ApplyGeneralAdType) => {
    try {
        const response = await sendRequest({
            headers: {
                Authorization: `Bearer ${Cookies.get("accessToken")}`,
            },
            method: "POST",
            data: data,
            url: `/api/v1/recruit/general/${recruitId}/apply`,
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("공고 지원하기 에러:", error);
    }
};
