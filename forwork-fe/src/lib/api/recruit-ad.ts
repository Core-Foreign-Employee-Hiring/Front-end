import {sendRequest} from "@/src/lib/axios";
import Cookies from "js-cookie";

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
